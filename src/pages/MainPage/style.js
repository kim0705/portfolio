import styled from "@emotion/styled";

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr; 
    align-items: flex-start;
    gap: 40px;
    padding: 100px 50px;
    max-width: 1300px;
    margin: 0 auto;

    /* 반응형 */
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 40px 0; 
    }
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

    /* 반응형 */
    @media (max-width: 1024px) {
        position: sticky;
        height: auto;
        width: 90%;
        padding: 20px 30px;
        margin: 0 auto 80px auto;
    }
`;

export const MainContentArea = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 50px;

    /* 반응형 */
    @media (max-width: 1024px) {
        width: 90%;
        height: auto;
        margin: 0 auto;
        align-items: center;
    }
`;