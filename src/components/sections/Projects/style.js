import styled from "@emotion/styled";
import { mainPageFadeUp } from "../../../styles/common";

export const ProjectContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    /* 반응형 */
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const ProjectContent = styled.div`
    width: 100%;
    max-width: 1200px;
`;

export const ProjectHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    
    h2 { 
        margin: 0;
        font-size: 28px;
        color: #e0e0e0;
        font-weight: 600;
    }

    svg {
        color: #007bff;
        font-size: 28px;
        flex-shrink: 0;
    }
`;

export const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;

    /* 반응형 */
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const CardAnimationWrapper = styled.div`
    height: 100%;
    opacity: 0;
    animation: ${mainPageFadeUp} 0.6s ease-out forwards;
`;

export const ProjectCard = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #242424;
    border-radius: 24px;
    overflow: hidden;
    border: 2px solid #2a2a2a;
    cursor: pointer;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    
    & > div:last-child { 
        flex: 1;
    }

    /* PC 환경에서만 적용 */
    @media (hover: hover) {
        &:hover {
            transform: translateY(-12px);
            border-color: rgba(0, 123, 255, 0.45);
            box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 123, 255, 0.28);
        }
    }

    /* 반응형 */
    @media (max-width: 1024px) {
        &:active {
        transform: scale(0.97); 
        background: rgba(255, 255, 255, 0.05);
        transition: transform 0.1s; 
        }
    }
`;

export const CardImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    overflow: hidden; 

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const CardInfo = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > span {
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: #777777;
    }

    h3 {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.35;
        color: #f1f1f1;
        margin-bottom: 10px;

        ${({ type }) => type === 'main' ? `-webkit-line-clamp: 2;` : ` -webkit-line-clamp: 3;`}
    }

    p {
        font-size: 14px;
        line-height: 1.5;
        color: #bdbdbd;
        margin-bottom: 10px;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    /*기술 스택*/
    span {
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.04);
        color: #bbbbbb;
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    /*+버튼(표시 되지 않은 기술 스택 갯수)*/
    button {
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 8px;
        color: #007bff;
        background: rgba(0, 123, 255, 0.1);
        border: 1px dashed rgba(0, 123, 255, 0.4);
        cursor: pointer;
        font-weight: 700;
        transition: all 0.2s ease;

        &:hover {
            background: rgba(0, 123, 255, 0.2);
            transform: translateY(-2px);
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

    /* 반응형 */
    @media (max-width: 1024px) {
        height: auto;
        width: 90%;
        display: flex;
        flex-direction: column;
    }
`;

export const TitleSection = styled.section`
    margin-bottom: 80px;
    text-align: center;

    h1 {
        font-size: 56px;
        font-weight: 800;
        margin-bottom: 24px;
        letter-spacing: -1.5px;
        color: #ffffff;
    }
    p {
        font-size: 22px;
        line-height: 1.6;
        font-weight: 500;
        color: #aaaaaa;
        margin: 0 auto;
        font-weight: 400;
    }
`;

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    align-items: start;

    /* 반응형 */
    @media (max-width: 1024px) {
        height: auto;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px; 
    }
`;  