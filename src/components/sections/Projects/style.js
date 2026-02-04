import styled from "@emotion/styled";

export const ProjectContainer = styled.section`
    width: 100%;
    padding: 40px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ProjectContent = styled.div`
    width: 100%;
    max-width: 1200px;
`;

export const ProjectHeader = styled.div`
    margin-bottom: 30px;
    text-align: left;
    
    h2 { 
        font-size: 32px;
        color: #ffffff; 
        margin-bottom: 16px; 
        font-weight: 700;

         opacity: 0;
        transform: translateY(8px);
        animation: fadeUp 0.5s ease-out forwards;
    }

    opacity: 0;
    transform: translateY(8px);
    animation: fadeUp 0.5s ease-out forwards;
`;

export const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;

    /* 반응형*/
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const ProjectCard = styled.article`
    background-color: #242424;
    border-radius: 24px;
    overflow: hidden;
    border: 2px solid #2a2a2a;
    cursor: pointer;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: rgba(0, 123, 255, 0.45);
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 123, 255, 0.28);
    }

    opacity: 0;
    transform: translateY(10x);
    animation: fadeUp 0.55s ease-out forwards;

    @keyframes fadeUp {
        to {
        opacity: 1;
        }
    }
`;

export const CardImageWrapper = styled.div`
    width: 100%;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardInfo = styled.div`
    padding: 20px;

    span {
        display: block;
        font-size: 12px;
        color: #777777;
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 10px;
        line-height: 1.3;
    }

    p {
        font-size: 14px;
        color: #9a9a9a;
        line-height: 1.6;
        margin-bottom: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.05);
        color: #cfcfcf;
        border: 1px solid rgba(255, 255, 255, 0.1);

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
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