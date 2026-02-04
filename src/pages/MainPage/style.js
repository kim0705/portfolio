import styled from "@emotion/styled";

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr; 
    align-items: flex-start;
    gap: 40px;
    padding: 100px 50px;
    max-width: 1300px;
    margin: 0 auto;
`;

export const MainSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    flex: 0 0 320px;
    background-color: #242424;
    border: 1px solid #2a2a2a;
    border-radius: 40px;
    padding: 40px 30px;
    position: sticky;
    top: 100px;
    gap: 30px;
`;

export const MainContentArea = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 50px;
`;