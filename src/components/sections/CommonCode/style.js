import styled from "@emotion/styled";

export const CodeControlDashboard = styled.div`
    display: flex;
    gap: 20px;
    background: #1a1d23;
    padding: 24px;
    border-radius: 20px;
    border: 1px solid #2d3139;
    margin: 20px 0;
    
    /* 반응형 */
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const PanelBase = styled.div`
    flex: 1;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const MasterPanel = styled(PanelBase)`
    background: rgba(0, 123, 255, 0.05);
    border: 1px solid rgba(0, 123, 255, 0.2);
`;

export const DetailPanel = styled(PanelBase)`
    flex: 1.5;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid #2d3139;
`;

export const PanelTitle = styled.div`
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 16px;
    color: ${props => props.$isMaster ? '#007bff' : '#4ade80'};
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const MasterItem = styled.div`
    padding: 14px 18px;
    background: ${props => props.$active ? 'rgba(0, 123, 255, 0.15)' : '#1e2229'};
    border: 1px solid ${props => props.$active ? '#007bff' : '#2d3139'};
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s ease;

    span {
        font-family: 'monospace';
        font-size: 11px;
        color: ${props => props.$active ? '#007bff' : '#64748b'};
        background: ${props => props.$active ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};
        padding: 2px 6px;
        border-radius: 4px;
    }

    /* PC 환경에서만 적용 */
    @media (hover: hover) {
        transition: all 0.2s ease;
        &:hover {
            border-color: #007bff;
            transform: translateX(4px);
        }
    }
`;

export const DetailGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
`;

export const DataPill = styled.div`
    padding: 12px;
    background: #16191e;
    border: 1px solid #2d3139;
    border-radius: 8px;
    font-size: 13px;
    color: #d1d5db;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    transition: all 0.2s ease;

    /* PC 환경에서만 적용 */
    @media (hover: hover) {
        transition: all 0.2s ease;
        &:hover {
            border-color: #4ade80;
            color: #fff;
        }
    }
`;

export const PanelCaption = styled.div`
    font-size: 12px;
    color: #94a3b8;
    margin-top: 24px;
    line-height: 1.5;
    border-top: 1px solid #2d3139;
    padding-top: 16px;

    strong {
        display: block;
        font-size: 15px;
        color: #ffffff;
        margin-bottom: 6px;
    }

    p {
        font-size: 13px;
        color: #cbd5e1;
        line-height: 1.6;
        margin: 0;
    }
`;