import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: #1a1a1a;
    border-bottom: 1px solid #333;
`;

export const Navigation = styled.nav`
    margin-left: auto;
    ul {
        display: flex;
        gap: 40px; 
        list-style: none;
        margin: 0;
        padding: 0;
    
    li {
        cursor: pointer;
        font-weight: 500;
        color: #ccc;
        transition: color 0.2s;

    &:hover {
        color: #ffffff;
    }
    }
  }
`;