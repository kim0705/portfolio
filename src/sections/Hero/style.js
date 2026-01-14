import styled from "@emotion/styled";

export const HeroContainer = styled.section`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
`;

export const HeroContent = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px; 
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 72px;
    font-weight: 800;
    margin: 0;
    letter-spacing: -1px;
    background: linear-gradient(135deg, #ffffff 0%, #666666 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
    font-size: 20px;
    color: #888888;
    line-height: 32px;
    margin-top: 10px;
    
    span {
        color: #ffffff;
        font-weight: 600;
    }
`;