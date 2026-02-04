import { css } from "@emotion/react";

export const globalStyles = css`
  /* 브라우저 기본 여백 완전히 제거 */
    html, body, #root {
      width: 100%;
      background-color: #1a1a1a;
      height: 100%;
      color: #ffffff;
    } 

  /* 모든 요소에 box-sizing 적용 (패딩이 너비에 영향을 주지 않게 함) */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;