import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 40px 0;
    background-color: #1a1a1a;
    color: #888;
    text-align: center;
    border-top: 1px solid #333;
    font-size: 0.9rem;

    p {
        margin-bottom: 10px;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  
    span {
        cursor: pointer;
        &:hover { color: #fff; }
    }
`;