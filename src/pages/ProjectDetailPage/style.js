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
    .category {
        color: #007bff;
        font-weight: 700;
        letter-spacing: 1px;
    }
    h1 {
        font-size: 42px;
        font-weight: 800;
        margin: 16px 0;
        line-height: 1.3;
        color: #fff;
    }
    .description {
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
    color: #fff;
`;

export const TaskGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    
    .task-item {
        background: #1a1d23;
        padding: 24px;
        border-radius: 20px;
        border: 1px solid #2d3139;
        font-size: 16px;
        line-height: 1.6;
        color: #ccc;
        transition: transform 0.3s;
        
        &:hover { 
            transform: translateY(-5px); 
            border-color: #007bff; 
        }
    }
`;

export const RoleDetailSection = styled.section`
    background: #16191e;
    padding: 40px;
    border-radius: 30px;
    border: 1px solid #2d3139;

    .role-group {
        margin-bottom: 40px;

        h3 { 
            color: #fff; 
            font-size: 20px; 
            margin-bottom: 20px; 
        }

        ul li { 
            margin-bottom: 12px; 
            list-style: none;
            position: relative;
            padding-left: 20px;
            color: #bbb;

            &::before {
                content: "•";
                color: #007bff;
                position: absolute;
                left: 0;
                font-weight: bold;
            }
        }
    }

    .role-sub-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        border-top: 1px solid #2d3139;
        padding-top: 30px;

        .role-box {
            h4 { 
                color: #007bff; 
                margin-bottom: 15px; 
                font-size: 17px; 
            }
            
            ul li { 
                font-size: 15px; 
                color: #aaa; 
                margin-bottom: 8px; 
                list-style: none;
            }
        }
    }
`;

export const TroubleShootingCard = styled.article`
    background: linear-gradient(145deg, #1e2229, #16191e);
    padding: 50px;
    border-radius: 40px;
    border: 1px solid rgba(0, 123, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);

    .problem {
        margin-bottom: 35px;
        h4 { 
            color: #ff4d4d; 
            margin-bottom: 12px; 
            font-size: 18px; 
        }

        p { 
            line-height: 1.7; 
            color: #ccc; 
        }
    }

    .solution {
        h4 { 
            color: #4dff88; 
            margin-bottom: 12px; 
            font-size: 18px; 
        }

        ul li { 
            color: #eee; 
            margin-bottom: 10px; 
            line-height: 1.6;
            list-style: square;
            margin-left: 20px;
        }
    }
`;

export const RetrospectCard = styled.div`
    background: #1a1d23;
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