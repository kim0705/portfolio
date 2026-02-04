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
    margin-bottom: 60px;
    
    span {
        color: #007bff;
        font-weight: 700;
        letter-spacing: 1px;
    }

    h1 {
        font-size: 42px;
        font-weight: 800;
        margin: 16px 0;
        line-height: 1.3;
        color: #ffffff;
    }

    p:first-of-type {
    font-size: 15px;
    color: #777;
    margin-bottom: 12px;
    }

    p {
    font-size: 18px;
    color: #999;
    line-height: 1.6;
    }

`;

export const SectionTitle = styled.h2`
    font-size: 26px;
    font-weight: 700;
    margin: 80px 0 30px 0;
    padding-left: 15px;
    border-left: 5px solid #007bff;
    color: #ffffff;
`;

export const TaskGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    
    div {
        background-color: #1a1d23;
        padding: 24px;
        border-radius: 30px;
        border: 1px solid #2d3139;
        font-size: 16px;
        line-height: 1.6;
        color: #cccccc;
        transition: transform 0.25s ease, border-color 0.25s ease;
        
        &:hover { 
            transform: translateY(-4px); 
            box-shadow: 0 10px 30px rgba(0, 123, 255, 0.15);
        }
    }
`;

export const RoleDetailSection = styled.section`
    background-color: #1a1d23;
    padding: 40px;
    border-radius: 30px;
    border: 1px solid #2d3139;
`;

export const RoleGroup = styled.div`
    margin-bottom: 40px;

    h3 {
        color: #ffffff;
        font-size: 20px;
        margin-bottom: 20px;
    }

    ul {
        li {
            margin-bottom: 12px;
            list-style: none;
            position: relative;
            padding-left: 20px;
            color: #bbbbbb;

            &::before {
                content: "•";
                color: #007bff;
                position: absolute;
                left: 0;
                font-weight: bold;
            }
        }
    }
`;

export const RoleSubGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    border-top: 1px solid #2d3139;
    padding-top: 30px;
`;

export const RoleBox = styled.div`
    h4 {
        color: #007bff;
        margin-bottom: 15px;
        font-size: 17px;
    }

    ul li {
        font-size: 15px;
        color: #aaaaaa;
        margin-bottom: 8px;
        list-style: none;
    }
`;

export const TroubleShootingCard = styled.article`
    background-color: #1a1d23;
    padding: 40px;
    border-radius: 30px;
    border: 1px solid #2d3139;
    transition: box-shadow 0.25s ease, transform 0.25s ease;
`;

export const ProblemSection = styled.section`
    margin-bottom: 35px;

    h4 {
        color: #ff4d4d;
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        line-height: 1.7;
        color: #cccccc;
    }
`;

export const SolutionSection = styled.section`
    h4 {
        color: #4dff88;
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 700;
    }

    ul {
        margin-left: 20px;

        li {
        color: #bbbbbb;
        margin-bottom: 10px;
        line-height: 1.6;
        list-style: square;
        }
    }
`;

export const RetrospectCard = styled.div`
    background-color: #1a1d23;
    padding: 40px;
    border-radius: 30px;
    font-style: italic;
    line-height: 1.8;
    color: #999;
    position: relative;

    &::before {
        content: '"';
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 60px;
        color: #2d3139;
        font-family: serif;
    }
`;