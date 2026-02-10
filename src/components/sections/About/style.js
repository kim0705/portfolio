import styled from "@emotion/styled";
import { detailPageFadeIn, scaleAppear } from "../../../styles/common";

export const AboutCardContainer = styled.aside`
    padding: 40px 0;
    opacity: 0;
    animation: ${scaleAppear} 0.4s ease-out forwards;
    animation-delay: 0.12s;
`;

export const ProfileTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 28px;

    /* 반응형 */
    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        text-align: left;
        gap: 25px;
    }
`;

export const ImageWrapper = styled.div`
    flex: 0 0 180px;
    height: 180px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const NameTag = styled.div`
    margin-top: 20px;

    h2 {
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 8px;
        font-weight: 700;
    }
    p {
        font-size: 16px;
        color: #007bff;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.4px;
    }
`;

export const SidebarInfo = styled.div`
    padding: 25px 0;
    border-top: 1px solid #2a2a2a;
    border-bottom: 1px solid #2a2a2a;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    /* 반응형 */
    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        gap: 15px 20px;
        padding: 20px 10px;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
    color: #cccccc;

    span {
        width: 80px;
        color: #777777;
        font-weight: 600;
        font-size: 11px;
        text-transform: uppercase;
        flex-shrink: 0;
    }

    p, a {
        margin: 0;
        padding-left: 10px;
        text-align: left; 
    }
`;

export const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-left: 8px;
        cursor: pointer;
        color: #aaaaaa;
        font-size: 16px;
        transition: color 0.2s;
        cursor: pointer;
        position: relative;
        top: 2px;
    }
    
    /* PC 환경에서만 적용 */
    @media (hover: hover) {
        &:hover {
            p {
                color: #007bff;
                text-decoration: underline;
            }
            svg {
                color: #007bff;
            }
        }
    }

    /* 반응형 */
    @media (max-width: 1024px) {
        &:active {
            opacity: 0.7;
            p {
                color: #007bff;
            }
        }
    }
`;

export const GithubWrapper = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #cccccc;
    text-decoration: none;

    p {
        padding-left: 0;
    }

    svg {
        margin-left: 8px;
        cursor: pointer;
        color: #aaaaaa;
        font-size: 16px;
        transition: color 0.2s;
        cursor: pointer;
        position: relative;
        top: 2px;
    }
    
    /* PC 환경에서만 적용 */
    @media (hover: hover) {
        &:hover {
            p {
                color: #007bff;
                text-decoration: underline;
            }
            svg {
                color: #007bff;
            }
        }
    }

    /* 반응형 */
    @media (max-width: 1024px) {
        &:active {
            opacity: 0.7;
            p {
                color: #007bff;
            }
        }
    }
`;

export const SidebarSkills = styled.div`
    margin-bottom: 30px;

    h3 {
        font-size: 13px;
        color: #666;
        text-transform: uppercase;
        margin-bottom: 15px;
        letter-spacing: 1px;
    }

    /* 반응형 */
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span {
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 999px;
        color: #bbbbbb;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }
`;

export const MoreButton = styled.button`
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
`;

export const AboutPageContainer = styled.main`
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
    text-align: center;
    margin-bottom: 80px;

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

    /* 반응형 */
    @media (max-width: 1024px) {
        margin-bottom: 20px;
    }
`;

export const ProfileSection = styled.section`
    width: 100%;
    display: flex;
    align-items: stretch;
    gap: 40px;;
    background: rgba(255, 255, 255, 0.03);
    padding: 36px 40px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 40px;    

    opacity: 0;
    animation: ${scaleAppear} 0.5s ease-out forwards;
    animation-delay: 0.1s;
`;

export const ProfileWrapper = styled.div`
    width: 200px;
    height: 230px;
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
        font-size: 26px;
        color: #ffffff;
        font-weight: 700;
        margin-bottom: 20px;  
        
        svg {
            color: #007bff;
            font-size: 28px;
            flex-shrink: 0;
            margin-right: 8px;  
        }
    }

    ul {
        list-style: none;
        margin-top: 10px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    li {
        position: relative;
        padding-left: 22px;
        font-size: 18px;
        line-height: 2.5;
        color: #cccccc;
        margin-bottom: 10px;

        &::before {
            content: "•";
            position: absolute;
            left: 0;
            top: -7px;
            color: #007bff;
            font-size: 22px;
        }
    }
`;

export const GridSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    
    opacity: 0;
    animation: ${detailPageFadeIn} 0.5s ease-out forwards;
    animation-delay: 0.25s;
`;

export const GridItem = styled.article`
    background: rgba(255, 255, 255, 0.02);
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);

    h3 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 22px;
        margin-bottom: 20px;
        border-bottom: 1px solid #333333;
        padding-bottom: 10px;
        color: #ffffff;
        
        svg {
            color: #007bff;
            font-size: 24px;
            flex-shrink: 0;
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
    gap: 12px;

    span {
        padding: 8px 18px;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 500;
        color: #bbbbbb;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.04);
        
        /* PC 환경에서만 적용 */
        @media (hover: hover) {
            &:hover {
                background: rgba(255, 255, 255, 0.08);
            }
        }
    }
`;

export const DetailInfoItem = styled.div`
    margin-bottom: 18px;

    span {
        display: block;
        font-size: 14px;
        color: #888;
        margin-bottom: 6px;
    }

    strong {
        display: block;
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 4px;
        font-weight: 600;
    }

    p {
        font-size: 16px;
        color: #cccccc;
        line-height: 1.6;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;