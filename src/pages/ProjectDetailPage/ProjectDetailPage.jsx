import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';

function ProjectDetailPage() {
    const { projectId } = useParams();

    return (
        <S.DetailPageLayout>
            <S.ContentWrapper>
                <S.HeaderSection>
                    <span className="category">Web Development & System Optimization</span>
                    <h1>부산디지털대학교 학습관리시스템(LMS) 고도화 및 분리 구축</h1>
                    <p className="description">
                        기존 단일 시스템을 학습 포털(학사 행정)과 LMS(수업 운영)로 분리하여
                        데이터 정합성을 높이고 사용자 경험을 최적화한 프로젝트입니다.
                    </p>
                </S.HeaderSection>

                <S.SectionTitle>🔥 프로젝트 핵심 과업</S.SectionTitle>
                <S.TaskGrid>
                    <div className="task-item">단일 시스템에 혼재된 학사 행정 및 수업 운영 기능을 목적에 따라 분리 및 고도화</div>
                    <div className="task-item">사용자 유형(학습자·교수자·운영자·관리자)별 사용 목적에 맞는 메뉴 체계 재정의</div>
                    <div className="task-item">기존 데이터와 핵심 기능을 유지하며 UI/UX 개선 및 기능 확장</div>
                </S.TaskGrid>

                <S.SectionTitle>🙋‍♂️ 담당 역할 및 수행 내역</S.SectionTitle>
                <S.RoleDetailSection>
                    <div className="role-group">
                        <h3>서버 및 화면 통합 개발</h3>
                        <ul>
                            <li>eGovFrame 기반 자사 프레임워크 환경에서 Java 기반 기존 소스 분석 및 LMS 기능 개발</li>
                            <li>요구사항 분석, 화면 흐름 설계 및 사용자 인터페이스 설계서 작성·피드백 반영</li>
                            <li>기존 테이블 구조 기반 신규 컬럼 추가 및 일부 신규 테이블 설계</li>
                            <li>다수의 테이블 조인을 활용한 복합 데이터 조회 로직 구현</li>
                            <li>JSP와 jQuery를 활용한 단계별 화면 흐름 및 UI 구현</li>
                        </ul>
                    </div>

                    <div className="role-sub-grid">
                        <div className="role-box">
                            <h4>학습자 LMS 기능</h4>
                            <ul>
                                <li>강의 수강 (영상 재생 및 자막 처리 로직)</li>
                                <li>과제(리포트, 프로젝트) 및 토론 기능</li>
                                <li>강의계획서 및 상세 정보 조회</li>
                                <li>파일 시스템 (업로드/다운로드/제출/삭제)</li>
                            </ul>
                        </div>
                        <div className="role-box">
                            <h4>관리자 전용 기능</h4>
                            <ul>
                                <li>공통코드 및 시스템 설정 관리</li>
                                <li>외부 사용자 계정 관리</li>
                                <li>게시판 권한 및 접근 제어 관리</li>
                            </ul>
                        </div>
                    </div>
                </S.RoleDetailSection>

                <S.SectionTitle>✅ 문제 해결 (Trouble Shooting)</S.SectionTitle>
                <S.TroubleShootingCard>
                    <div className="problem">
                        <h4>[문제 정의 및 원인 분석]</h4>
                        <p>출석, 수강률, 진행률이 모두 단순 재생 시간 누적 값에 의존하여 배속 재생이나 단순 재생 유지 시 실제 학습 상태와 지표 간의 괴리 발생</p>
                    </div>
                    <div className="solution">
                        <h4>[해결 방안 및 결과]</h4>
                        <ul>
                            <li>운영 정책 재정의: 출석 미인정 상태에서 배속 재생 제한 로직 구현</li>
                            <li>실제 시청 기반 출석 처리: 실제 재생 시간을 기준으로 한 정밀 판정 로직 도입</li>
                            <li>데이터 구조 개선: 분 단위 시청 정보 저장 컬럼 추가로 이어듣기 및 수강률 계산 정확도 향상</li>
                        </ul>
                    </div>
                </S.TroubleShootingCard>

                <S.SectionTitle>🔍 회고</S.SectionTitle>
                <S.RetrospectCard>
                    <p>단순 기능을 넘어 기존 시스템과 데이터 구조를 분석하며 전체 프로세스를 먼저 이해하는 설계를 배웠습니다. 특히 여러 기능이 얽힌 영역에서 데이터 일관성을 지키는 정합성의 중요성을 체감했으며, 사용자 및 운영자와의 지속적인 소통이 결과물의 완성도를 결정한다는 실무적 교훈을 얻은 의미 있는 경험이었습니다.</p>
                </S.RetrospectCard>
            </S.ContentWrapper>
        </S.DetailPageLayout>
    );
}

export default ProjectDetailPage;