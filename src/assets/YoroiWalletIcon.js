// @flow

import React from 'react'
import Svg, {
  Path,
  G,
  Polygon,
} from 'react-native-svg'
import {COLORS} from '../styles/config'


type Props = {width: number, height: number, color?: string}

const YoroiWalletIcon = ({width, height, color = COLORS.BLACK}: Props) => (
  <Svg
    viewBox="0 0 128 35"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...{width, height}}
  >
    <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <G id="terms@2x" transform="translate(-422.000000, -27.000000)">
        <G id="Group" transform="translate(422.000000, 27.000000)">
          <Path
            d="M3.97175284,8.0969697 L3.97175284,9.43838384
            C3.97175284,9.858585863.97175284,10.29494953.97175284,10.7151515
            L3.97175284,12.0242424 C3.97175284,12.0565657 3.97175284,12.0888889
            3.98776797,12.1050505 C11.0504414,17.0181818 18.0650694,21.9313131
            25.1117276,26.8444444 L27.9784363,24.840404 C19.9708701,19.2646465
            11.9953342,13.7050505 3.97175284,8.0969697 Z"
            id="Shape"
            fill={color}
          />
          <Path
            d="M22.0688525,5.83434343 C20.7876419,6.72323232 19.5064313,7.57979798
            18.2252207,8.46868687 C18.0490542,8.58181818 17.9369483,8.5979798
            17.7607818,8.46868687 C16.1912989,7.36969697 14.6058008,6.27070707
            13.0203026,5.17171717 C11.370744,3.99191919 9.72118537,2.81212121
            8.0556116,1.64848485 C7.27087011,1.0989899 6.48612863,0.549494949
            5.70138714,0 L0,0 C0.304287516,0.21010101 0.544514502,0.387878788
            0.80075662,0.565656566 C2.29016393,1.6 3.77957125,2.65050505
            5.26897856,3.68484848 C6.74237074,4.71919192 8.21576293,5.75353535
            9.68915511,6.78787879 C11.0664565,7.75757576 12.459773,8.74343434
            13.8370744,9.71313131 C15.1503153,10.6343434 16.4795712,11.5393939
            17.7928121,12.4767677 C17.9369483,12.5737374 18.0330391,12.5737374
            18.1771753,12.4767677 C19.234174,11.7333333 20.3071879,11.0222222
            21.3802018,10.2787879 C24.0066835,8.45252525 26.6331652,6.62626263
            29.2596469,4.81616162 C31.1654477,3.49090909 33.0872636,2.16565657
            34.9930643,0.856565657 C35.3934426,0.581818182 35.7778058,0.307070707
            36.1941992,0.0161616162 L30.476797,0.0161616162 C27.6741488,1.93939394
            24.8875158,3.89494949 22.0688525,5.83434343 Z"
            id="Shape"
            fill={color}
          />
          <Path
            d="M4.0037831,17.9070707 C3.98776797,17.9555556 3.97175284,17.9717172
            3.97175284,17.9878788 C3.97175284,18.2626263 3.97175284,18.5212121
            3.97175284,18.7959596 L3.97175284,20.4121212 C3.97175284,20.8969697
            3.97175284,21.3818182 3.97175284,21.8505051 C3.97175284,21.8828283
            3.98776797,21.8989899 3.98776797,21.9313131 C8.68020177,25.2121212
            13.3726356,28.4767677 18.0970996,31.7737374 C18.0970996,31.7737374
            18.1131148,31.7737374 18.1131148,31.7737374 L20.9798235,29.7373737
            C15.2944515,25.7777778 9.65712484,21.8505051 4.0037831,17.9070707 Z"
            id="Shape"
            fill={color}
          />
          <Path
            d="M32.174401,8.11313131 C28.6510719,10.569697 25.1757881,13.010101
            21.6844893,15.4505051 C21.7325347,15.5151515 21.7645649,15.5474747
            21.7965952,15.579798 C22.6774275,16.210101 23.5742749,16.840404
            24.4551072,17.4707071 C24.4711223,17.4868687 24.5191677,17.4868687
            24.551198,17.4868687 C27.0815889,15.7252525 29.6119798,13.9474747
            32.1583859,12.1858586 C32.174401,12.169697 32.174401,12.1373737
            32.1904161,12.1212121 L32.1904161,8.11313131 L32.174401,8.11313131 Z"
            id="Shape"
            fill={color}
          />
          <Path
            d="M32.174401,18.0525253 C30.9892812,18.8767677 29.8361917,19.6848485
            28.667087,20.4929293 C29.5959647,21.1555556 30.4928121,21.8020202
            31.3896595,22.4484848 L32.174401,21.8989899 L32.174401,18.0525253 Z"
            id="Shape"
            fill={color}
          />
          <G
            transform="translate(47.244641, 0.484848)"
            fill={color}
            fill-rule="nonzero"
            id="Shape"
            stroke={color}
          >
            <Polygon
              points="13.5327869 0.242424242 14.7018916 0.242424242 7.83139975 11.0868687
              7.83139975 20.0888889 6.85447667 20.0888889 6.85447667 11.0868687 0.0160151324
              0.242424242 1.1851198 0.242424242 7.30290038 10.0040404 7.35094578 10.0040404"
            />
            <Path
              d="M25.4,20.2020202 C22.5493064,20.2020202 20.2271122,19.2323232
              18.4174023,17.3090909 C16.6076923,15.3858586 15.6948298,12.9939394
              15.6948298,10.1333333 C15.6948298,7.30505051 16.5916772,4.91313131
              18.4174023,2.98989899 C20.2271122,1.06666667 22.5493064,0.096969697
              25.4,0.096969697 C28.1385876,0.096969697 30.4287516,1.03434343
              32.2704918,2.90909091 C34.112232,4.78383838 35.0411097,7.19191919
              35.0411097,10.1333333 C35.0411097,13.0909091 34.112232,15.5151515
              32.2704918,17.389899 C30.4127364,19.2646465 28.1225725,20.2020202
              25.4,20.2020202 Z M25.4160151,19.2323232 C27.8343001,19.2323232
              29.8842371,18.3919192 31.5337957,16.6949495 C33.1993695,14.9979798
              34.0321564,12.8161616 34.0321564,10.1494949 C34.0321564,7.48282828
              33.1993695,5.31717172 31.5337957,3.63636364 C29.8842371,1.93939394
              27.8503153,1.11515152 25.4160151,1.11515152 C22.8696091,1.11515152
              20.7716267,1.98787879 19.1540984,3.71717172 C17.53657,5.44646465
              16.7197982,7.5959596 16.7197982,10.1494949 C16.7197982,12.7030303
              17.53657,14.8525253 19.1540984,16.6141414 C20.7876419,18.3434343
              22.8696091,19.2323232 25.4160151,19.2323232 Z"
            />
            <Path
              d="M52.129256,20.0888889 L50.9121059,20.0888889 L45.0185372,11.7494949
              L40.1499369,11.7494949 L40.1499369,20.0888889 L39.1569987,20.0888889
              L39.1569987,0.242424242 L45.6911728,0.242424242 C47.7571248,0.242424242
              49.3105927,0.75959596 50.3355612,1.79393939 C51.3605296,2.82828283
              51.8730139,4.21818182 51.8730139,5.94747475 C51.8730139,7.77373737
              51.3605296,9.16363636 50.3355612,10.1333333 C49.3105927,11.0868687
              47.9653216,11.6363636 46.2837327,11.7333333 L46.2517024,11.8141414
              L52.129256,20.0888889 Z M40.1339218,1.22828283 L40.1339218,10.7959596
              L45.2587642,10.7959596 C48.99029,10.7959596 50.8480454,9.17979798
              50.8480454,5.93131313 C50.8480454,4.36363636 50.3996217,3.18383838
              49.5027743,2.40808081 C48.6059269,1.63232323 47.3567465,1.22828283
              45.7552333,1.22828283 L40.1339218,1.22828283 Z"
            />
            <Path
              d="M64.4929382,20.2020202 C61.6422446,20.2020202 59.3200504,19.2323232
              57.5103405,17.3090909 C55.7006305,15.3858586 54.787768,12.9939394
              54.787768,10.1333333 C54.787768,7.30505051 55.6846154,4.91313131
              57.5103405,2.98989899 C59.3200504,1.06666667 61.6422446,0.096969697
              64.4929382,0.096969697 C67.2315259,0.096969697 69.5216898,1.03434343
              71.36343,2.90909091 C73.2051702,4.78383838 74.1340479,7.19191919
              74.1340479,10.1333333 C74.1340479,13.0909091 73.2051702,15.5151515
              71.36343,17.389899 C69.5056747,19.2646465 67.2155107,20.2020202
              64.4929382,20.2020202 Z M64.5089533,19.2323232 C66.9272383,19.2323232
              68.9771753,18.3919192 70.6267339,16.6949495 C72.2923077,14.9979798
              73.1250946,12.8161616 73.1250946,10.1494949 C73.1250946,7.48282828
              72.2923077,5.31717172 70.6267339,3.63636364 C68.9771753,1.93939394
              66.9432535,1.11515152 64.5089533,1.11515152 C61.9625473,1.11515152
              59.8645649,1.98787879 58.2470366,3.71717172 C56.6134931,5.44646465
              55.8127364,7.5959596 55.8127364,10.1494949 C55.8127364,12.7030303
              56.6295082,14.8525253 58.2470366,16.6141414 C59.8805801,18.3434343
              61.9625473,19.2323232 64.5089533,19.2323232 Z"
            />
            <Polygon
              points="78.4261034 20.0888889 78.4261034 0.242424242 79.4030265
              0.242424242 79.4030265 20.0888889"
            />
          </G>
          <G
            transform="translate(73.029004, 26.565657)"
            fill={color}
            fill-rule="nonzero"
            id="Shape"
            stroke={color}
          >
            <Polygon
              points="6.50214376 2.52121212 6.85447667 2.52121212 5.15687264 7.38585859
              4.80453972 7.38585859 3.42723834 3.08686869 3.4112232 3.08686869 2.04993695
              7.38585859 1.69760404 7.38585859 -5.68434189e-14 2.52121212 0.368348045
              2.52121212 1.85775536 6.83636364 3.21904161 2.52121212 3.60340479
              2.52121212 4.98070618 6.82020202"
            />
            <Path
              d="M12.1394704,2.52121212 L12.4757881,2.52121212 L12.4757881,7.38585859
              L12.1394704,7.38585859 L12.1394704,6.3030303 L12.1234552,6.3030303
              C11.7070618,7.04646465 11.0504414,7.41818182 10.1856242,7.41818182
              C9.51298865,7.41818182 8.95245902,7.19191919 8.48802018,6.75555556
              C8.02358134,6.31919192 7.79936948,5.72121212 7.79936948,4.99393939
              C7.79936948,4.26666667 8.02358134,3.66868687 8.47200504,3.2
              C8.92042875,2.71515152 9.49697352,2.48888889 10.2016393,2.48888889
              C10.6180328,2.48888889 10.9863808,2.58585859 11.3226986,2.7959596
              C11.6590164,3.00606061 11.9312736,3.28080808 12.1234552,3.63636364
              L12.1394704,3.63636364 L12.1394704,2.52121212 Z M10.1856242,7.07878788
              C10.7461538,7.07878788 11.2105927,6.88484848 11.5789407,6.51313131
              C11.9472888,6.12525253 12.1394704,5.62424242 12.1394704,4.99393939
              C12.1394704,4.37979798 11.9633039,3.86262626 11.610971,3.44242424
              C11.2586381,3.02222222 10.7781841,2.81212121 10.2016393,2.81212121
              C9.62509458,2.81212121 9.14464061,3.02222222 8.7442623,3.42626263
              C8.34388398,3.83030303 8.1517024,4.36363636 8.1517024,5.01010101
              C8.1517024,5.60808081 8.34388398,6.10909091 8.72824716,6.4969697
              C9.09659521,6.88484848 9.59306431,7.07878788 10.1856242,7.07878788 Z"
            />
            <Polygon
              points="14.5257251 7.36969697 14.5257251 0 14.8617251 0 14.8617251 7.36969697"
            />
            <Polygon
              points="17.0240858 7.36969697 17.0240858 0 17.3600858 0 17.3600858 7.36969697"
            />
            <Path
              d="M23.5262295,4.83232323 C23.5262295,4.94545455 23.5262295,5.01010101
              23.5102144,5.04242424 L19.4904161,5.04242424 C19.5224464,5.62424242
              19.714628,6.12525253 20.0669609,6.51313131 C20.435309,6.9010101
              20.8837327,7.09494949 21.4282472,7.09494949 C22.1008827,7.09494949
              22.6453972,6.83636364 23.0617907,6.3030303 L23.3180328,6.52929293
              C22.8535939,7.12727273 22.2450189,7.43434343 21.4602774,7.43434343
              C20.7876419,7.43434343 20.2431274,7.20808081 19.7947037,6.75555556
              C19.3622951,6.3030303 19.1380832,5.70505051 19.1380832,4.97777778
              C19.1380832,4.25050505 19.3462799,3.66868687 19.7786885,3.2
              C20.2110971,2.73131313 20.7395965,2.50505051 21.3641866,2.50505051
              C22.0208071,2.50505051 22.5332913,2.73131313 22.9176545,3.16767677
              C23.3340479,3.57171717 23.5262295,4.13737374 23.5262295,4.83232323
              Z M21.4282472,2.81212121 C20.9317781,2.81212121 20.4993695,2.98989899
              20.1310214,3.34545455 C19.7626734,3.7010101 19.5544767,4.15353535
              19.5224464,4.71919192 L23.2059269,4.71919192 C23.1738966,4.13737374
              22.9977301,3.68484848 22.6774275,3.32929293 C22.3411097,2.97373737
              21.9247163,2.81212121 21.4282472,2.81212121 Z"
            />
            <Path
              d="M26.489029,7.41818182 C26.0726356,7.41818182 25.768348,7.30505051
              25.6081967,7.07878788 C25.4480454,6.85252525 25.3679697,6.51313131
              25.3679697,6.06060606 L25.3679697,2.84444444 L24.6953342,2.84444444
              L24.6953342,2.52121212 L25.3679697,2.52121212 L25.3679697,0.791919192
              L25.6882724,0.75959596 L25.6882724,2.53737374 L27.5620429,2.53737374
              L27.5620429,2.86060606 L25.6882724,2.86060606 L25.6882724,5.93131313
              C25.6882724,6.33535354 25.7363178,6.62626263 25.8484237,6.82020202
              C25.9605296,7.01414141 26.1687264,7.11111111 26.4730139,7.11111111
              C26.8253468,7.11111111 27.1456494,7.01414141 27.4499369,6.8040404
              L27.5460277,7.12727273 C27.2257251,7.30505051 26.8733922,7.41818182
              26.489029,7.41818182 Z"
            />
          </G>
          <Path
            d="M46.7962169,31.2222222 L68,31.2222222"
            id="Shape"
            stroke={color}
            stroke-width="2"
          />
          <Path
            d="M105,31.2222222 L126.871879,31.2222222"
            id="Shape"
            stroke={color}
            stroke-width="2"
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default YoroiWalletIcon