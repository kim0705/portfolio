import styled from "@emotion/styled";

export const HeroContainer = styled.section`
    width: 100%;
    background-color: #242424;
    border: 1px solid #2a2a2a;
    border-radius: 40px;
    padding: 80px 70px;
`;

export const HeroContent = styled.div`
    h2 {
        font-size: 36px;
        line-height: 1.4;
        color: #f1f1f1;
        font-weight: 800;

        opacity: 0;
        transform: translateY(12px);
        animation: titleFadeUp 0.6s ease-out forwards;
    }

    p {
        margin-top: 28px;
        font-size: 18px;
        color: #dddddd;
        line-height: 1.8;

        opacity: 0;
        transform: translateY(12px);
        animation: descFadeUp 0.6s ease-out forwards;
        animation-delay: 0.15s;
    }

    @keyframes titleFadeUp {
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes descFadeUp {
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }
`;