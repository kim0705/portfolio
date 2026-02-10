import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const MainContent = styled.main`
    width: 100%;
    background-color: #1a1a1a;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
`;

/* 메인 페이지 공통 애니메이션 */
export const mainPageFadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

/* 상세 페이지 공통 애니메이션 */
export const detailPageFadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

/* 확장형 애니메이션 */
export const scaleAppear = keyframes`
    from {
        opacity: 0;
        transform: scale(0.98);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

/* 로딩 스피너 */
export const LoadingSpinner = styled.div`
    width: 16px;
    height: 16px;
    border: 2px solid rgba(88, 166, 255, 0.3);
    border-top: 2px solid #58a6ff;
    border-radius: 50%;
    animation: ${rotate} 0.8s linear infinite;
    display: inline-block;
`;