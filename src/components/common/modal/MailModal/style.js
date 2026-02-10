import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
    background: #1e1e1e;
    padding: 24px;
    border-radius: 16px;
    width: 90%;
    max-width: 500px;
    border: 1px solid #333;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    h3 { 
        margin-bottom: 10px; 
        color: #ffffff; 
        font-size: 20px;
    }

    button {
        background: none; 
        border: none; 
        color: #888888;
        font-size: 24px; 
        cursor: pointer;
        
        &:hover { 
            color: #ffffff; 
        }
    }
`;

/* 공통 입력 스타일 */
const CommonInputStyle = `
    width: 100%;
    background: #121212;
    border: 1px solid #444444;
    border-radius: 10px;
    color: #ffffff;
    padding: 14px;
    font-size: 15px;
    line-height: 1.5;
    transition: all 0.2s;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(88, 166, 255, 0.2);
    }

    &::placeholder {
        color: #555555;
    }
`;

export const Input = styled.input`
    ${CommonInputStyle}
    margin-bottom: 12px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset !important;
        
        -webkit-text-fill-color: #ffffff !important;
        
        background-clip: content-box !important;
        
        transition: background-color 5000s ease-in-out 0s;
    }
`;

export const MessageBox = styled.textarea`
    ${CommonInputStyle}
    height: 120px;
    resize: none;
    margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    button {
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;

        /* 취소버튼 */
        :nth-of-type(1) {
            background: #333333;
            color: #eeeeee;
            border: none;

            &:hover { 
                background: #444444; 
            }
        }

        /* 전송버튼 */
        :nth-of-type(2) {
            background: #007bff; 
            color: #ffffff; 
            border: none;
            display: flex; 
            align-items: center; 
            justify-content: center;
            min-width: 80px;
            
            &:disabled { 
                opacity: 0.5; 
                cursor: not-allowed; 
            }

            &:hover:not(:disabled) { 
                background: #4091ff; 
            }
        }
    }
`;