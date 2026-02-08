import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: rgba(26, 26, 26, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 0 50px;
    border-bottom: 1px solid #333;
`;

export const Navigation = styled.nav`
    margin-left: auto;

    ul {
        display: flex;
        align-items: center;
        gap: 40px; 
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #b0b0b0;
        font-weight: 600;
        position: relative;
        padding: 8px 0;
        transition: all 0.3s ease;

        &:hover {
            color: #ffffff; 
        }

        /* 현재 페이지일 때 적용 */
        &.active {
            color: #007bff;
            font-size: 17px;
            font-weight: 700;
            letter-spacing: 0.5px;

            &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #007bff;
            }
        }
    }
`;