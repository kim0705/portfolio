import { css } from "@emotion/react";

export const globalStyles = css`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css");

    /* 모든 요소에 box-sizing 적용 (패딩이 너비에 영향을 주지 않게 함) */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* 브라우저 기본 여백 완전히 제거 */
    html, body, #root {
        width: 100%;
        background-color: #1a1a1a;
        height: 100%;
        color: #ffffff;

        /* 폰트 적용: Pretendard를 우선으로 하고, 안되면 시스템 폰트 사용 */
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, 
                    system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", 
                    "Noto Sans KR", "Malgun Gothic", sans-serif;
    } 
`;