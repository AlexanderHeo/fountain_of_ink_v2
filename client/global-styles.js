import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html {
  // Primary
  --indigo-0: #E0E8F9;
  --indigo-1: #BED0F7;
  --indigo-2: #98AEEB;
  --indigo-3: #7B93DB;
  --indigo-4: #647ACB;
  --indigo-5: #4C63B6;
  --indigo-6: #4055A8;
  --indigo-7: #35469C;
  --indigo-8: #2D3A8C;
  --indigo-9: #19216C;

  // Neutrals
  --cool-grey-0: #F5F7FA;
  --cool-grey-1: #E4E7EB;
  --cool-grey-2: #CBD2D9;
  --cool-grey-3: #9AA5B1;
  --cool-grey-4: #7B8794;
  --cool-grey-5: #616E7C;
  --cool-grey-6: #52606D;
  --cool-grey-7: #3E4C59;
  --cool-grey-8: #323F4B;
  --cool-grey-9: #1F2933;

  // Supporting
  --light-blue-vivid-0: #E3F8FF;
  --light-blue-vivid-1: #B3ECFF;
  --light-blue-vivid-2: #81DEFD;
  --light-blue-vivid-3: #5ED0FA;
  --light-blue-vivid-4: #40C3F7;
  --light-blue-vivid-5: #2BB0ED;
  --light-blue-vivid-6: #1992D4;
  --light-blue-vivid-7: #127FBF;
  --light-blue-vivid-8: #0B69A3;
  --light-blue-vivid-9: #035388;

  --red-vivid-0: #FFE3E3;
  --red-vivid-1: #FFBDBD;
  --red-vivid-2: #FF9B9B;
  --red-vivid-3: #F86A6A;
  --red-vivid-4: #EF4E4E;
  --red-vivid-5: #E12D39;
  --red-vivid-6: #CF1124;
  --red-vivid-7: #AB091E;
  --red-vivid-8: #8A041A;
  --red-vivid-9: #610316;

  --yellow-vivid-0: #FFFBEA;
  --yellow-vivid-1: #FFF3C4;
  --yellow-vivid-2: #FCE588;
  --yellow-vivid-3: #FADB5F;
  --yellow-vivid-4: #F7C948;
  --yellow-vivid-5: #F0B429;
  --yellow-vivid-6: #DE911D;
  --yellow-vivid-7: #CB6E17;
  --yellow-vivid-8: #B44D12;
  --yellow-vivid-9: #8D2B0B;

  --teal-0: #EFFCF6;
  --teal-1: #C6F7E2;
  --teal-2: #8EEDC7;
  --teal-3: #65D6AD;
  --teal-4: #3EBD93;
  --teal-5: #27AB83;
  --teal-6: #199473;
  --teal-7: #147D64;
  --teal-8: #0C6B58;
  --teal-9: #014D40;
	}
`

const GS = ({ children }) => (
  <>
    <GlobalStyle />
    { children }
  </>
)

export default GS
