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

    /* 왼쪽 상단 큰 따옴표 */
    &::before {
        content: '“';
        position: absolute;
        top: 20px; 
        left: 30px; 
        font-size: 160px;
        font-family: 'Georgia', serif;
        color: rgba(0, 123, 255, 0.09);
        line-height: 1;
    }

    /* 오른쪽 하단 큰 따옴표 */
    &::after {
        content: '”';
        position: absolute;
        bottom: -20px; 
        right: 30px;   
        font-size: 160px;
        font-family: 'Georgia', serif; 
        color: rgba(0, 123, 255, 0.09);
        line-height: 1;
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
    }
`;