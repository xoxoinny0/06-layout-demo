/**
 * 전역으로 사용될 기본 스타일시트. 이 파일에서 정의한 class는 ReactJSX에서 className 속성으로 참조해야 한다.
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";
// reset.css
import reset from "styled-reset";

const Globalstyles = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR';
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default Globalstyles;