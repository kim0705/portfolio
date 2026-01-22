import styled from "@emotion/styled";

export const ProjectContainer = styled.section`
    width: 100%;
    padding: 0 0 100px;
    display: flex;
    justify-content: center;
`;

export const ProjectContent = styled.div`
    width: 90%;
    max-width: 1200px;
`;

export const ProjectHeader = styled.div`
    margin-bottom: 50px;
    
    h2 { 
        font-size: 40px; 
        color: #fff; 
        margin-bottom: 16px; 
        font-weight: 700; 
    }
    
    p { 
        font-size: 18px; 
        color: #666; 
    }
`;

export const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    width: 100%;
`;

export const ProjectCard = styled.article`
    background-color: #242424;
    border-radius: 40px;
    overflow: hidden;
    border: 1px solid #2a2a2a;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
        border-color: #444;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
`;

export const CardImageWrapper = styled.div`
    width: 100%;
    height: 220px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardInfo = styled.div`
    padding: 24px;

    h3 {
        font-size: 22px;
        color: #fff;
        margin-bottom: 12px;
    }
    p {
        font-size: 15px;
        color: #aaa;
        line-height: 1.6;
        margin-bottom: 20px;
    }
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    span {
        font-size: 12px;
        color: #fff;
        background-color: #222;
        padding: 5px 12px;
        border-radius: 6px;
        border: 1px solid #333;
    }
`;

export const ProjectPageContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #ffffff;
`;

export const TitleSection = styled.section`
    margin-bottom: 80px;
    text-align: center;

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

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;

    button {
        background: #333;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        
        &:hover { 
            background: #444; 
        }
    }
`;