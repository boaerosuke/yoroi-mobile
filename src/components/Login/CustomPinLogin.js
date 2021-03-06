// @flow

import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {View} from 'react-native'

import {CONFIG} from '../../config'
import PinInput from '../Common/PinInput'
import {withTranslations, withNavigationTitle} from '../../utils/renderUtils'
import {withHandlers} from 'recompose'
import {WALLET_INIT_ROUTES} from '../../RoutesList'
import {authenticateByCustomPin} from '../../crypto/customPin'
import {customPinHashSelector} from '../../selectors'
import {showErrorDialog} from '../../actions'
import {StatusBar} from '../UiKit'

import styles from './styles/CustomPinLogin.style'

import type {SubTranslation} from '../../l10n/typeHelpers'
import type {Navigation} from '../../types/navigation'
import type {ComponentType} from 'react'

const getTranslations = (state) => state.trans.WithPinLoginScreen

type Props = {
  translations: SubTranslation<typeof getTranslations>,
  onPinEnter: (pin: string) => Promise<boolean>,
}

const CustomPinLogin = ({translations, onPinEnter}: Props) => (
  <View style={styles.root}>
    <StatusBar type="dark" />

    <PinInput
      pinMaxLength={CONFIG.PIN_LENGTH}
      labels={{
        title: translations.title,
        subtitle: '',
        subtitle2: '',
      }}
      onPinEnter={onPinEnter}
    />
  </View>
)

type ExternalProps = {|
  navigation: Navigation,
  customPinHash: ?string,
  translations: SubTranslation<typeof getTranslations>,
  isLoginInProgress: boolean,
|}

export default (compose(
  connect((state) => ({
    customPinHash: customPinHashSelector(state),
  })),
  withTranslations(getTranslations),
  withNavigationTitle(({translations}) => translations.title),
  withHandlers({
    onPinEnter: ({
      navigation,
      isLoginInProgress,
      customPinHash,
    }: ExternalProps) => async (pin) => {
      if (!customPinHash) {
        throw new Error('Custom pin is not setup')
      }

      const isPinValid = await authenticateByCustomPin(customPinHash, pin)
      if (isPinValid) {
        navigation.navigate(WALLET_INIT_ROUTES.WALLET_SELECTION)
      } else {
        await showErrorDialog((dialogs) => dialogs.incorrectPin)
      }

      return !isPinValid
    },
  }),
)(CustomPinLogin): ComponentType<ExternalProps>)
