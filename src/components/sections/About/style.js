import styled from "@emotion/styled";

export const AboutCardContainer = styled.aside`
    padding: 40px 0;
    opacity: 0;
    transform: scale(0.98);
    animation: aboutIn 0.4s ease-out forwards;
    animation-delay: 0.12s;

    @keyframes aboutIn {
        to {
        opacity: 1;
        transform: scale(1);
        }
    }
`;

export const ProfileTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 28px;
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
`;

export const InfoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #cccccc;

    span {
        color: #777777;
        font-weight: 600;
        font-size: 11px;
        text-transform: uppercase;
    }
    a {
        color: #ffffff;
        
        &:hover {
            color: #007bff;
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

export const AboutPageContainer = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
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
    }
    p {
        font-size: 22px;
        line-height: 1.6;
        font-weight: 500;
        color: #b5b5b5;
        font-weight: 400;
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
        color: #f2f2f2;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        margin-top: 12px;
        padding-top: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    li {
        position: relative;
        padding-left: 18px;
        font-size: 18px;
        line-height: 2.5;
        color: #dddddd;

        &::before {
            content: "•";
            position: absolute;
            left: 0;
            top: 0;
            color: #4d8dff;
            font-weight: bold;
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

    &:hover {
        transform: none;
        background: rgba(255, 255, 255, 0.02);
    }

    h3 {
        font-size: 22px;
        margin-bottom: 20px;
        border-bottom: 1px solid #333333;
        padding-bottom: 10px;
        color: #4d8dff;
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
        
        &:hover {
            background: rgba(255, 255, 255, 0.08);
        }
    }
`;

export const HistoryEntry = styled.div`
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