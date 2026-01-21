import styled from "@emotion/styled";

export const AboutContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0 100px;
`;

export const AboutContent = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 50px;
    margin: 0 20px; 
    border: 1px solid #2a2a2a;
    border-radius: 40px;
    display: flex;
    align-items: stretch;
    gap: 80px;
    background-color: #242424;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

export const ImageWrapper = styled.div`
    flex: 0 0 280px;
    height: 280px;
    
    img {
        width: 100%;
        height: 100%;
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

export const AboutPageContainer = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 60px 20px; */
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;

export const TitleSection = styled.section`
    text-align: center;
    margin-bottom: 80px;

    h1 {
        font-size: 56px;
        font-weight: 800;
        margin-bottom: 16px;
        background: linear-gradient(to right, #ffffff, #888888);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p {
        font-size: 20px;
        color: #aaaaaa;
    }
`;

export const ProfileSection = styled.section`
    width: 100%;
    display: flex;
    align-items: stretch;
    gap: 60px;
    background: rgba(255, 255, 255, 0.03);
    padding: 50px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 80px;
`;

export const ProfileWrapper = styled.div`
    width: 250px;
    height: 280px;
    flex-shrink: 0;
    border-radius: 30px;
    overflow: hidden;
    border: 2px solid #333333;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProfileDetailInfo = styled.div`
    h2 {
        font-size: 32px;
        margin-bottom: 10px;
    }
    .intro {
        font-size: 18px;
        color: #007bff;
        margin-bottom: 24px;
        font-weight: 500;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0;

        li {
            display: flex;
            gap: 15px;
            font-size: 16px;
            span {
                width: 80px;
                color: #666666;
                font-weight: bold;
            }
            a {
                color: #ffffff;
                text-decoration: none;
                &:hover {
                    color: #007bff;
                }
            }
        }
    }
`;

export const GridSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
`;

export const GridItem = styled.article`
    background: rgba(255, 255, 255, 0.02);
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.04);
    }

    h3 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #007bff;
        border-bottom: 1px solid #333333;
        padding-bottom: 10px;
    }

    .history-entry {
        margin-bottom: 15px;
        .date {
            display: block;
            font-size: 14px;
            color: #888888;
            margin-bottom: 5px;
        }
        p {
            font-size: 16px;
            color: #cccccc;
            line-height: 1.6;
        }
    }
`;

export const SkillGroup = styled.div`
    margin-bottom: 25px;

    h4 {
        font-size: 13px;
        color: #666;
        margin-bottom: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SkillTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span {
        padding: 6px 14px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.05); /* 기본 배경 */
        color: #ccc;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.2s ease;

        &:hover {
            border-color: #007bff;
            color: #fff;
        }
    }
`;