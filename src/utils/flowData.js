const commonNodeStyle = {
    background: 'rgba(255, 255, 255, 0.04)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '500',
    padding: '15px 10px',
    width: 200,
    backdropFilter: 'blur(8px)',
    textAlign: 'center',
    lineHeight: '1.4',
    wordBreak: 'keep-all',
};

/* 프로젝트별 플로우 차트 데이터 (React Flow용) */
export const flowData = {
    /* 프로젝트 ID 1: 결제 및 재고 관리 */
    1: {
        title: "결제 트랜잭션 및 재고 관리 프로세스",
        description: [
            "Atomic Transaction: 주문 생성, 재고 차감, 결제 데이터 저장을 하나의 트랜잭션으로 처리하여 데이터 무결성 보장",
            "실시간 재고 연동: 결제 승인 시 재고 즉시 차감 및 주문 취소(배송 전) 시 자동 환불 API 호출과 재고 복구 프로세스 구축",
            "비동기 예외 처리: API 응답 지연 및 실행 순서 불일치 문제를 해결하기 위해 useEffect 의존성 제어 및 토큰 검증 로직 강화"
        ],
        nodes: [
            /* --- 결제 흐름 (좌측) --- */
            { id: 'p1', type: 'input', position: { x: 100, y: 0 }, data: { label: '결제 요청' }, style: commonNodeStyle },
            {
                id: 'p2',
                position: { x: 75, y: 150 },
                data: { label: 'PortOne API 결제 승인' },
                style: { ...commonNodeStyle, width: 150, height: 150, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1d23', border: '2px solid #007bff' }
            },
            { id: 'p3', position: { x: 350, y: 350 }, data: { label: '실패: 결제 실패 메세지' }, style: { ...commonNodeStyle, background: '#44272b', border: '1px solid #f8d7da' } },

            /* 데이터 무결성 보장 그룹 (Transaction) */
            {
                id: 'group_trans',
                position: { x: -30, y: 420 },
                data: { label: '데이터 무결성 보장 (Transaction)' },
                style: { width: 280, height: 320, backgroundColor: 'rgba(45, 49, 57, 0.4)', border: '2px dashed #3d4450', color: '#94a3b8' }
            },
            { id: 'p4', extent: 'parent', parentId: 'group_trans', position: { x: 40, y: 60 }, data: { label: '주문/배송/결제 데이터 생성' }, style: commonNodeStyle },
            { id: 'p5', extent: 'parent', parentId: 'group_trans', position: { x: 40, y: 160 }, data: { label: '상품 테이블: 재고 차감' }, style: commonNodeStyle },
            { id: 'p6', extent: 'parent', parentId: 'group_trans', position: { x: 40, y: 260 }, data: { label: '상품 테이블: 판매량 가산' }, style: commonNodeStyle },
            { id: 'p7', position: { x: 10, y: 800 }, data: { label: '주문 완료 페이지 리다이렉트' }, style: { ...commonNodeStyle, border: '1px solid #007bff', color: '#007bff' } },

            /* --- 환불 흐름 (우측) --- */
            { id: 'r1', type: 'input', position: { x: 650, y: 0 }, data: { label: '사용자 취소 요청' }, style: commonNodeStyle },
            {
                id: 'r2',
                position: { x: 600, y: 150 },
                data: { label: '주문 상태 체크' },
                style: { ...commonNodeStyle, borderRadius: '40px', border: '2px solid #007bff' }

            },
            /* 환불 프로세스 진행 */
            { id: 'r3', position: { x: 850, y: 350 }, data: { label: '배송 중/완료: 고객센터 문의 안내' }, style: commonNodeStyle },
            { id: 'r4', position: { x: 550, y: 450 }, data: { label: 'PortOne 환불 API 호출' }, style: commonNodeStyle },
            { id: 'r5', position: { x: 550, y: 600 }, data: { label: '재고 복구 및 주문 상태 업데이트' }, style: commonNodeStyle },
            { id: 'r6', position: { x: 550, y: 750 }, data: { label: '환불/취소 완료 메시지' }, style: { ...commonNodeStyle, background: '#1e3a5f', border: '1px solid #007bff' } },
        ],
        edges: [
            /* 결제 엣지 */
            { id: 'ep1-2', source: 'p1', target: 'p2', animated: true },
            { id: 'ep2-3', source: 'p2', target: 'p3', label: '실패' },
            { id: 'ep2-4', source: 'p2', target: 'p4', label: '성공' },
            { id: 'ep4-5', source: 'p4', target: 'p5' },
            { id: 'ep5-6', source: 'p5', target: 'p6' },
            { id: 'ep6-7', source: 'p6', target: 'p7' },

            /* 환불 엣지 */
            { id: 'er1-2', source: 'r1', target: 'r2' },
            { id: 'er2-3', source: 'r2', target: 'r3', label: '배송 중/완료' },
            { id: 'er2-4', source: 'r2', target: 'r4', label: '배송 전' },
            { id: 'er4-5', source: 'r4', target: 'r5', label: '성공', animated: true },
            { id: 'er5-6', source: 'r5', target: 'r6' },
        ]
    },

    /* 프로젝트 ID 2: 강의 시청 및 출석 판정 프로세스 */
    2: {
        title: "강의 시청 및 출석 판정 프로세스",
        description: [
            "접속 보안 관리: 세션 체크를 통한 중복 접속 제어",
            "데이터 동기화 및 이력 관리: 사용자 브라우저와 서버 간 주기적 통신을 통해 비정상적 종료 상황에서도 데이터 유실 최소화",
            "학습 이행 검증: 무작위 인터랙션 이벤트를 통해 실제 학습 여부를 확인하고 미응답 시 강의 목록으로 강제 리다이렉트하여 실제 학습 여부를 검증",
            "동적 UI 권한 제어: 진도율과 수강 상태에 맞춰 플레이어의 UI(배속, 스킵 등)를 제한하여 학습 가이드 준수 유도"
        ],
        nodes: [
            /* === [Root Group] 학습 세션 관리 === */
            {
                id: 'group_session',
                data: { label: '학습 세션 보안 및 데이터 무결성 관리' },
                position: { x: -50, y: -100 },
                style: { width: 850, height: 1450, backgroundColor: 'rgba(30, 34, 42, 0.2)', border: '2px solid #555' }
            },

            /* --- 1단계: 보안 및 초기 진단 --- */
            { id: 'n1', extent: 'parent', parentId: 'group_session', position: { x: 300, y: 80 }, data: { label: '강의 진입 시도' }, style: commonNodeStyle },
            { id: 'n2', extent: 'parent', parentId: 'group_session', position: { x: 300, y: 180 }, data: { label: '세션 및 중복 접속 체크' }, style: { ...commonNodeStyle, border: '2px solid #ff4d4f' } },
            { id: 'n3', extent: 'parent', parentId: 'group_session', position: { x: 500, y: 280 }, data: { label: '중복 감지: 세션 차단' }, style: { ...commonNodeStyle, background: '#44272b' } },
            { id: 'n4', extent: 'parent', parentId: 'group_session', position: { x: 100, y: 280 }, data: { label: '정상 진입: 출석 인정 기간 이내인지 확인' }, style: { ...commonNodeStyle, border: '2px solid #007bff' } },

            /* --- 2단계: 주기적 데이터 동기화 그룹 (1분 주기) --- */
            {
                id: 'group1',
                extent: 'parent',
                parentId: 'group_session',
                position: { x: 50, y: 450 },
                data: { label: '주기적 데이터 동기화 및 이력 로깅' },
                style: { width: 750, height: 750, backgroundColor: 'rgba(45, 49, 57, 0.4)', border: '2px dashed #3d4450' }
            },

            { id: 'n5', extent: 'parent', parentId: 'group1', position: { x: 275, y: 50 }, data: { label: '동기화 및 수강 이력 로그 생성' }, style: commonNodeStyle },
            { id: 'n6', extent: 'parent', parentId: 'group1', position: { x: 275, y: 150 }, data: { label: '상태별(출석/지각/결석) 현재 재생 시간 컬럼 업데이트' }, style: { ...commonNodeStyle, border: '1px solid #007bff' } },

            /* 핵심 조건 분기: 출석 이벤트 발생 유무 */
            { id: 'n7', extent: 'parent', parentId: 'group1', position: { x: 275, y: 260 }, data: { label: '진입 시 "출석 인정 기간"이었는가?' }, style: { ...commonNodeStyle, borderRadius: '20px' } },
            { id: 'n8', extent: 'parent', parentId: 'group1', position: { x: 75, y: 380 }, data: { label: '랜덤 출석 이벤트 발생' }, style: { ...commonNodeStyle, background: '#3d3623' } },
            { id: 'n9', extent: 'parent', parentId: 'group1', position: { x: 275, y: 500 }, data: { label: '수강 요건(출석인정시간/이벤트) 충족 검증' }, style: commonNodeStyle },

            /* 최종 결과 확정 */
            { id: 'n10', extent: 'parent', parentId: 'group1', position: { x: 50, y: 620 }, data: { label: '[최종] 출석 확정' }, style: { ...commonNodeStyle, color: '#007bff', border: '2px solid #007bff' } },
            { id: 'n11', extent: 'parent', parentId: 'group1', position: { x: 275, y: 620 }, data: { label: '[최종] 지각 확정' }, style: { ...commonNodeStyle, color: '#ffc107', border: '2px solid #ffc107' } },
            { id: 'n12', extent: 'parent', parentId: 'group1', position: { x: 500, y: 620 }, data: { label: '[미달] 결석(기록 보존)' }, style: { ...commonNodeStyle, background: '#44272b' } },

            /* --- 3단계: 제어 정책 적용 --- */
            { id: 'n13', extent: 'parent', parentId: 'group_session', position: { x: 300, y: 1250 }, data: { label: '완강/출석 여부에 따른 플레이어 권한 제어' }, style: commonNodeStyle },
        ],
        edges: [
            { id: 'e1-2', source: 'n1', target: 'n2' },
            { id: 'e2-3', source: 'n2', target: 'n3', label: '중복' },
            { id: 'e2-4', source: 'n2', target: 'n4', label: '정상' },
            { id: 'e4-5', source: 'n4', target: 'n5', label: '세션 시작', animated: true },
            { id: 'e5-6', source: 'n5', target: 'n6' },
            { id: 'e6-7', source: 'n6', target: 'n7' },

            /* 인정 기간 여부에 따른 이벤트 분기 */
            { id: 'e7-8', source: 'n7', target: 'n8', label: '인정 기간 내' },
            { id: 'e8-9', source: 'n8', target: 'n9' },
            { id: 'e7-9', source: 'n7', target: 'n9', label: '인정 기간 외 (지각/결석 대상)' },

            /* 결과 라우팅 */
            { id: 'e9-10', source: 'n9', target: 'n10', label: '기간내+요건충족' },
            { id: 'e9-11', source: 'n9', target: 'n11', label: '기간외+출석인정시간' },
            { id: 'e9-12', source: 'n9', target: 'n12', label: '요건 미충족' },

            { id: 'e10-13', source: 'n10', target: 'n13' },
            { id: 'e11-13', source: 'n11', target: 'n13' },
            { id: 'e12-13', source: 'n12', target: 'n13' },
        ]
    }
};