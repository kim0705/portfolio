import * as S from "./style";

function CommonCode() {

    return (

        <S.CodeControlDashboard>
            {/* 왼쪽: 그룹 코드 영역 (Master) */}
            <S.MasterPanel>
                <S.PanelTitle $isMaster={true}>Group Code (L1)</S.PanelTitle>

                <S.MasterItem $active={true}>
                    게시판 구분 <span>SA06</span>
                </S.MasterItem>

                <S.MasterItem>
                    파일 업로드 정책 <span>UP12</span>
                </S.MasterItem>

                <S.MasterItem>
                    회원 등급 분류 <span>US01</span>
                </S.MasterItem>
            </S.MasterPanel>

            {/* 오른쪽: 상세 코드 영역 (Detail) */}
            <S.DetailPanel>
                <S.PanelTitle $isMaster={false}>Detail Code (L2)</S.PanelTitle>

                <S.DetailGrid>
                    <S.DataPill>공지사항</S.DataPill>
                    <S.DataPill>질문답변</S.DataPill>
                    <S.DataPill>자료실</S.DataPill>
                    <S.DataPill>이벤트</S.DataPill>
                </S.DetailGrid>

                <S.PanelCaption>
                    <strong>계층형 구조 기반 공통 코드 적용</strong>
                    <p>
                        그룹(L1)과 상세 항목(L2) 구조로 공통 코드를 구성해, 화면과 로직에서 반복적으로 활용할 수 있도록 구현했습니다. 관리 항목 추가나 변경 시 별도 개발 없이 운영 측면에서 대응할 수 있도록 고려했습니다.
                    </p>
                </S.PanelCaption>
            </S.DetailPanel>
        </S.CodeControlDashboard>
    );
}

export default CommonCode;