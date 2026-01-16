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
        gap: 40px; 
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
    text-decoration: none;
    color: inherit;         

    &:hover {
      color: #007bff;       
    }
  }
`;