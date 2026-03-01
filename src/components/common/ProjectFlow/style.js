import styled from "@emotion/styled";

export const FlowContainer = styled.div`
    width: 100%;
    background-color: #1a1d23;
    padding: 40px;
    border-radius: 24px;
    border: 1px solid #2d3139;
    display: flex;
    flex-direction: column;
    gap: 32px; 
    margin: 40px 0;

    /* 반응형 */
    @media (max-width: 1024px) {
        padding: 24px;
        gap: 24px;
        margin: 20px 0;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
    
    /* 반응형 */
    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`;

/* React Flow가 그려지는 실제 캔버스 영역 */
export const FlowCanvas = styled.div`
    width: 100%;
    height: 600px;
    background: #111318;
    border-radius: 16px;
    border: 1px solid #2d3139;
    position: relative;
    overflow: hidden;

    /* 반응형 */
    @media (max-width: 1024px) {
        height: 480px; 
    }

    ${(props) => props.$isExpanded && `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        border-radius: 0;
        background: #111318;
        transform: none;

        /* 반응형 */
        @media (min-width: 1024px) {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90vw;
            height: 85vh;
            border-radius: 16px;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
        }
    `}
`;

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-self: flex-start;

    /* 반응형 */
    @media (max-width: 1024px) {
        position: relative;
        top: 0;
        align-self: stretch;
        background: rgba(255, 255, 255, 0.03);
        padding: 20px;
        border-radius: 12px;
    }

    p {
        margin: 0;
        font-size: 16px;
        color: #d1d5db;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        line-height: 1.6;
        word-break: keep-all;

        /* 반응형 */
        @media (max-width: 1024px) {
            font-size: 15px;
        }
    }

    svg {
        color: #007bff;
        margin-top: 5px;
        flex-shrink: 0;
        font-size: 16px;
    }

    p:first-of-type {
        margin-top: 0;
    }
    
    p:last-of-type {
        margin-bottom: 0;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
`;