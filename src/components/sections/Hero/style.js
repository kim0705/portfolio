import styled from "@emotion/styled";

export const HeroContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContent = styled.div`
    text-align: center;
    max-width: 900px;
    padding: 0 20px;
`;

export const Title = styled.h1`
    font-size: 65px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
    line-height: 1.1;
`;

export const Subtitle = styled.p`
    font-size: 20px;
    color: #888888;
    line-height: 32px;
    margin-top: 10px;
    
    span {
        color: #ffffff;
        font-weight: 600;
        position: relative;
    }
`;