import styled from "@emotion/styled";
import { mainPageFadeUp } from "../../../styles/common";

export const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    background-color: #242424;
    border: 1px solid #2a2a2a;
    border-radius: 40px;
    padding: 90px 70px 60px;
    overflow: hidden;

    /* 반응형 */
    @media (max-width: 1024px) {
        padding: 60px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    
    h2 {
        font-size: 36px;
        line-height: 1.4;
        color: #f1f1f1;
        font-weight: 800;
        
        opacity: 0;
        animation: ${mainPageFadeUp} 0.6s ease-out forwards;
        animation-delay: 0.2s;

        /* 반응형 */
        @media (max-width: 1024px) {
            font-size: 28px;
            line-height: 1.5;
            word-break: keep-all;
        }
    }

    p {
        margin-top: 32px;
        font-size: 18px;
        color: #b0b0b0;
        line-height: 1.8;
        white-space: pre-wrap;

        opacity: 0;
        animation: ${mainPageFadeUp} 0.6s ease-out forwards;
        animation-delay: 0.35s;

        /* 반응형 */
        @media (max-width: 1024px) {
            font-size: 16px;
            line-height: 1.8;
            margin-top: 24px;
            word-break: keep-all;
        }
    }
`;