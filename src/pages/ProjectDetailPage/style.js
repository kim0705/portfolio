import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const DetailPageLayout = styled.main`
    width: 100%;
    min-height: 100vh;
    color: #e0e0e0;
    padding-bottom: 100px;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 24px;
`;

export const HeaderSection = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    gap: 24px;
    position: relative;

    /* 뒤로가기 버튼 */
    > span:nth-of-type(1) {
        display: inline-flex;
        align-self: flex-end;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1); 
        border-radius: 20px;
        color: #aaaaaa;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;

        /* PC 환경에서만 적용 */
        @media (hover: hover) {
            &:hover { 
                color: #ffffff; 
                background: rgba(255, 255, 255, 0.1);
                transform: translateX(-5px);
            }
        }

        /* 반응형 */
        @media (max-width: 1024px) {
            &:active {
                background: rgba(255, 255, 255, 0.2);
                transform: scale(0.98);
            }
        }
    }
    
    /* 카테고리 */
    > span:nth-of-type(2) {
        color: #007bff;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: -12px;
    }

    /* 프로젝트 제목 */
    h1 {
        font-size: 42px;
        font-weight: 800;
        margin: 0;
        line-height: 1.3;
        color: #ffffff;
    }

    /* 설명글 */
    p {
        padding: 24px 30px;
        margin-top: 30px;
        font-size: 17px;
        color: #d1d5db;
        line-height: 1.8;
        font-weight: 500;
        border-left: 4px solid #007bff;
        border-radius: 0 12px 12px 0;
        background: rgba(0, 123, 255, 0.05);
    }
`;

export const ProjectOverview = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    gap: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #a0a0a0;

    /* 참여 기간 & 인원 */
    span {
        display: flex;
        align-items: center; 
        gap: 6px; 

        svg {
            font-size: 16px;
            color: #64748b;
            display: block; 
        }
    }

    span + span {
        &::before {
            content: "|";
            margin-right: 15px;
            color: #444444; 
            pointer-events: none;
        }
    }

    /* 링크(GitHub/Notion) */
    a {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #a0a0a0;
        text-decoration: none;
        position: relative;
        transition: color 0.2s;

        &::before {
            content: "|";
            margin-right: 15px;
            color: #444444; 
            pointer-events: none;
        }

        &:hover {
            color: #ffffff;
        }

        svg {
            font-size: 16px;
            color: #64748b;
            display: block;
        }
    }
`;

export const ProjectImagesSection = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: auto;
    margin: 20px 0;
    padding-bottom: 10px;

    flex-direction: row;
    justify-content: ${(props) =>
        props.children.length === 1 ? 'center' : 'flex-start'};

    @media (max-width: 1024px) {
        flex-direction: column;
        overflow-x: hidden; 
        align-items: center;
    }
`;

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

export const MediaContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 200px;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    background: #1a1d23; 

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        display: ${props => (props.$isVisible ? 'block' : 'none')};
    }
`;

export const TechStackSection = styled.div`
    display: flex; 
    flex-direction: column;
    margin-top: 48px;
    gap: 14px;
`;

export const TechGroup = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;

    h4 {
        font-size: 12px;
        font-weight: 800;
        color: #a0a0a0;
        min-width: 140px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0;
        padding-top: 8px;
    }
`;

export const TechList = styled.dd`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    flex: 1;

    span {
        font-size: 14px;
        font-weight: 500;
        padding: 6px 12px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid #22262c;
        color: #d1d5db;
    }
`;

export const SectionTitle = styled.h2`
    display: flex;
    margin: 80px 0 32px 0;
    padding-left: 15px;
    align-items: center;
    gap: 10px;
    font-size: 26px;
    font-weight: 700;
    border-left: 5px solid #007bff;
    color: #ffffff;

    svg {
        color: #007bff; 
        font-size: 24px;
        flex-shrink: 0;
    }
`;

export const TaskGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    
    div {
        background-color: #1a1d23;
        padding: 24px;
        border-radius: 24px;
        border: 1px solid #2d3139;
        font-size: 16px;
        line-height: 1.6;
        color: #e2e8f0;
        transition: transform 0.25s ease, border-color 0.25s ease;
        
        /* PC 환경에서만 적용 */
        @media (hover: hover) {
            &:hover { 
                transform: translateY(-4px); 
                box-shadow: 0 10px 30px rgba(0, 123, 255, 0.15);
            }
        }
    }
`;

export const VideoSection = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 20px;    
    width: 100%;
    margin: 20px 0;
    justify-content: center;

    /* 반응형 */
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const VideoItem = styled.div`
    width: 100%;
    max-width: 1000px;    
    display: flex;
    flex-direction: column;
    align-items: center;

    video {
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        background: #000;
    }

    div {
        padding: 20px;
        color: #cccccc;
        font-size: 14px;
        text-align: center;
        line-height: 1.6;
        background: rgba(255, 255, 255, 0.03);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        word-break: keep-all;

        svg{
            color: #3b82f6;
            flex-shrink: 0;
            margin-top: 4px;
            margin-right: 6px;
        }
    }
`;

export const SectionSubtitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: #e2e2e2;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 5px;
`;

export const SpinnerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RoleDetailSection = styled.section`
    background-color: #1a1d23;
    padding: 45px;
    border-radius: 24px;
    border: 1px solid #2d3139;
`;

export const RoleGroup = styled.div`
    margin-bottom: 50px;

    &:last-of-type { 
        margin-bottom: 0; 
    }

    h3 {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        color: #ffffff;
        font-size: 22px;
        font-weight: 800;
    }

    ul {
        padding: 0;
        li {
            position: relative;
            margin-bottom: 14px;
            font-size: 16px;
            line-height: 1.7;
            padding-left: 24px;
            color: #d1d5db;
            list-style: none;

            &::before {
                content: "•";
                color: #007bff;
                position: absolute;
                left: 0;
                font-size: 18px;
                font-weight: bold;
                top: -2px;
            }
        }
    }
`;

export const RoleSubGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    border-top: 1px solid #2d3139;
    padding-top: 30px;
    margin-top: 20px;

    /* 반응형 */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const RoleBox = styled.div`
    padding: 10px 0;
    
    h4 {
        color: #007bff;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 800;
        display: flex;
        align-items: center;

        &::before {
            content: "✔";
            margin-right: 8px;
            font-size: 14px;
        }
    }

    ul {
        margin: 0;
        padding: 0;

        li {
            font-size: 15.5px;
            color: #e2e8f0;
            margin-bottom: 12px;
            line-height: 1.6;
            padding-left: 18px;
            position: relative;
            opacity: 1;

            &::before {
                content: "•";
                color: #3b82f6;
                position: absolute;
                left: 0;
            }
            
            &:last-child { 
                margin-bottom: 0; 
            }
        }
    }
`;

export const TroubleShootingCard = styled.article`
    background-color: #1a1d23;
    padding: 40px;
    border-radius: 24px;
    border: 1px solid #2d3139;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const ProblemSection = styled.section`
    h4 {
        color: #ffffff;
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        
        &::before {
            content: "PROBLEM";
            font-size: 11px;
            font-weight: 800;
            color: #ff6b6b;
            background: rgba(255, 107, 107, 0.15);
            padding: 4px 10px;
            border-radius: 6px;
            margin-right: 10px;
            letter-spacing: 1px;
        }
    }

    /* 문제 정의 */
    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.8;
        color: #d1d5db;
        margin-bottom: 18px; 
        padding-left: 4px;
    }

    /* 원인 분석 */
    ul {
        list-style: none;
        padding-left: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        li {
            position: relative;
            display: flex;
            align-items: flex-start;
            font-size: 15.5px;
            line-height: 1.6;
            color: #d1d5db;
            padding-left: 20px;
            margin-bottom: 10px;

            &::before {
                content: "•";
                position: absolute;
                left: 0;
                top: -4px;
                color: #ff6b6b;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
`;

export const SolutionSection = styled.section`
    h4 {
        color: #ffffff;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 12px;

        &::before {
            content: "SOLUTION";
            font-size: 11px;
            font-weight: 800;
            color: #51cf66;
            background: rgba(81, 207, 102, 0.15);
            padding: 4px 10px;
            border-radius: 6px;
            letter-spacing: 1px;
        }
    }

    /* 해결방안 */
    ul {
        list-style: none;
        padding: 0;

        li {
            font-size: 16px;
            color: #d1d5db;
            margin-bottom: 14px;
            line-height: 1.7;
            padding-left: 28px;
            position: relative;

            &::before {
                content: "✓";
                position: absolute;
                left: 0;
                font-size: 18px;
                font-weight: 900;
                color: #007bff;
            }
        }
    }

    /* 결과 */
    p {
        position: relative;
        display: block;
        padding-left: 30px;
        margin-top: 20px;
        padding: 12px 16px 12px 28px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.7;
        color: #d1d5db;

        svg {
            position: absolute;
            left: -8px;
            top: 15px;
            flex-shrink: 0;
            margin-right: 10px;
            margin-top: 5px;
            color: #007bff;
            font-size: 30px;
        }
    }
`;

export const RetrospectCard = styled.div`
    position: relative;
    padding: 40px 30px;
    background-color: #1a1d23;
    border-radius: 24px;
    border: 1px solid #2d3139;
    line-height: 1.8;
    color: #cbd5e1;

    p {
        position: relative;
        margin: 0;
        z-index: 1;
        font-size: 16px;
        line-height: 1.9;
        color: #e2e8f0;
        font-style: italic;
        white-space: pre-wrap;
    }
`;