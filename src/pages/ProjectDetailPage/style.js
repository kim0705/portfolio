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

export const FullPageLoader = styled.div`
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 11, 14, 0.7);
    backdrop-filter: blur(8px); 
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    span {
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.01em;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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

export const MediaContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 250px;
    border-radius: 12px;
    overflow: hidden;
    background: #1a1d23;

    img {
        width: 100%;
        height: auto;
        display: block;
        transition: opacity 0.4s ease-in-out;
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
        font-weight: 500;
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
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0; 
    }
`;

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; 
    background: #1a1d23;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        background: #000;
        transition: opacity 0.4s ease-in-out;
    }
`;

export const VideoNoteBox = styled.div`
    width: 100%;
    margin-top: 12px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.03);
    border-left: 3px solid #3b82f6;
    border-radius: 4px 12px 12px 4px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    svg {
        color: #3b82f6;
        font-size: 18px;
        margin-top: 2px;
        flex-shrink: 0;
    }

    span {
        color: #94a3b8;
        font-size: 14.5px;
        line-height: 1.6;
        word-break: keep-all;

        strong {
            color: #e2e8f0;
            margin-right: 6px;
        }
    }
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
            font-weight: 500;
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

export const FlowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 80px;
`;

export const FlowCard = styled.div`
    background: #1a1d23;
    border: 1px solid #2d3139;
    border-radius: 20px;
    padding: 30px;
    position: relative;
    border-left: 4px solid ${props => 
        props.type === 'problem' ? '#ff6b6b' : 
        props.type === 'solution' ? '#007bff' : '#4ade80'
    };
`;

export const FlowHeader = styled.div`
    margin-bottom: 20px;

    h4 { 
        font-size: 19px; 
        color: #ffffff; 
        margin-top: 10px; 
        font-weight: 700; 
    }
`;

export const FlowBadge = styled.span`
    font-size: 10px;
    font-weight: 800;
    color: ${props => props.color};
    background: ${props => props.color}15;
    padding: 4px 10px;
    border-radius: 6px;
    letter-spacing: 1px;
    color: ${props => 
        props.type === 'problem' ? '#ff6b6b' : 
        props.type === 'solution' ? '#007bff' :
        props.type === 'limitation' ? '#a78bfa' : '#4ade80'
    };

    background: ${props => 
        props.type === 'problem' ? 'rgba(255, 107, 107, 0.15)' : 
        props.type === 'solution' ? 'rgba(0, 123, 255, 0.15)' : 
        props.type === 'limitation' ? 'rgba(167, 139, 250, 0.15)' : 'rgba(74, 222, 128, 0.15)'
    };
`;

export const FlowBody = styled.div`
    ul { 
        list-style: none; 
        padding: 0; 

        li { 
            position: relative; 
            padding-left: 15px; 
            margin-bottom: 8px; 
            color: #d1d5db; 
            font-size: 15px; 

            &::before { 
                content: "•"; 
                position: absolute; 
                left: 0; 
                color: #444; 
            } 
        } 
    }
`;

export const AnalysisBox = styled.div`
    margin-top: 20px;
    padding: 18px;
    background: rgba(255, 107, 107, 0.05);
    border-radius: 12px;

    strong { 
        display: block; 
        font-size: 11px; 
        text-transform: uppercase; 
        color: #ff6b6b; 
        margin-bottom: 10px; 
        letter-spacing: 1px; 
    }

    ul li { 
        position: relative;
        padding-left: 20px;
        display: flex;
        font-size: 14px; 
        color: #d1d5db; 

        &::before { 
            content: "→"; 
            color: #ff6b6b; 
            position: absolute;
            left: 0;
            top: 0; 
        } 
    }
`;

export const DecisionBox = styled.div`
    background: rgba(0, 123, 255, 0.08);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 14.5px;
    border-left: 3px solid #007bff;
    color: #e2e8f0;
`;

export const ImplementationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    span { 
        font-family: 'JetBrains Mono', monospace; 
        font-size: 13px; 
        color: #94a3b8; 
        background: #0f1115; 
        padding: 10px 14px; 
        border-radius: 8px; 
        display: flex; 
        align-items: center; 

        &::before { 
            content: "•"; 
            color: #007bff; 
            margin-right: 8px; 
        } 
    }

    @media (max-width: 768px) { 
        grid-template-columns: 1fr; 
    }
`;

export const ResultList = styled.ul`
    li { 
        display: flex; 
        align-items: center; 
        gap: 10px; 
        color: #f1f5f9; 
        font-weight: 500; 

        &::before { 
            display: none; 
        } 

        svg { 
            color: #4ade80; 
        } 
    }
`;

export const TradeOffBox = styled.div`
    margin-top: 20px;
    font-size: 13.5px;
    color: #888;
    font-style: italic;
    padding-left: 5px;
`;

export const LimitationCard = styled.div`
    background: #1a1d23;
    border-radius: 24px;
    padding: 40px 30px;
    margin-bottom: 40px;
    border: 1px solid #2d3139;

    ul {
        list-style: none;
        padding: 0;
        margin-top: 24px;
    }

    li {
        position: relative;
        padding-left: 28px;
        margin-bottom: 16px;
        color: #d1d5db;
        font-size: 15.5px;
        line-height: 1.7;
        font-weight: 500;

        &::before {
            content: "→"; 
            position: absolute;
            left: 0;
            color: #a78bfa;
            font-weight: 700;
            font-size: 18px;
            top: -2px;
        }

        &:last-child {
            margin-bottom: 0;
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
        font-size: 15.5px;
        font-weight: 500;
        line-height: 1.7;
        color: #e2e8f0;
        font-style: italic;
        white-space: pre-wrap;
    }
`;