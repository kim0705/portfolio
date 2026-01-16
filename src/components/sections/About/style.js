import styled from "@emotion/styled";

export const AboutContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0;
`;

export const AboutContent = styled.div`
    width: 90%;
    max-width: 1100px;
    padding: 30px 50px;
    border: 1px solid #2a2a2a;
    border-radius: 40px;
    display: flex;
    align-items: center;
    gap: 80px;
    background-color: #242424;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

export const ImageWrapper = styled.div`
    flex: 0 0 280px;
    
    img {
        width: 100%;
        height: 320px;
        object-fit: cover;
        border-radius: 30px;
    }
`;

export const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-align: left; 
`;

export const ProfileInfo = styled.div`
    margin-bottom: 48px;

    h2 {
        font-size: 28px;
        color: #fff;
        margin-bottom: 8px;
        font-weight: 700;
    }
    p {
        font-size: 15px;
        color: #aaa;
        line-height: 1.5;
    }
`;

export const SkillSection = styled.div`
    width: 100%;

    h3 {
        font-size: 14px;
        color: #555;
        text-transform: uppercase;
        margin-bottom: 15px;
        letter-spacing: 1px;
        font-weight: 600;
    }
    `;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    span {
        padding: 8px 18px;
        background-color: #252525; 
        color: #fff;
        border-radius: 50px;
        font-size: 14px;
        border: 1px solid #333;
        
        &:hover {
            background-color: #333;
            border-color: #555;
        }
    }
    `;

    export const ButtonWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
    `;
    
    export const ProjectButton = styled.button`
        margin-top: 20px;
        background: transparent;
        border: 1px solid #444;
        color: #fff;
        padding: 10px 24px;
        border-radius: 50px;
        transition: all 0.3s ease;
        cursor: pointer;
    
        &:hover {
            background: #fff;
            color: #000;
            border-color: #fff;
        }
    `;