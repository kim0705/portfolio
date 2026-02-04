import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import projectsData from '../../data/projects.json';

function ProjectDetailPage() {

    const { projectId } = useParams();

    /* 최신순 정렬 (ID 기반 내림차순) */
    const sortedProjects = [...projectsData].sort((a, b) => b.projectId - a.projectId);
    const project = projectId ? projectsData.find(p => p.projectId === parseInt(projectId)) : sortedProjects[0];

    return (
        <S.DetailPageLayout>
            <S.ContentWrapper>
                <S.HeaderSection>
                    <span>{project?.category}</span>
                    <h1>{project?.title}</h1>
                    <p>참여 기간: {project?.period}</p>
                    <p>{project?.description}</p>
                </S.HeaderSection>

                <S.SectionTitle>🔥 프로젝트 핵심 과업</S.SectionTitle>
                <S.TaskGrid>
                    {project?.tasks?.map((task, i) => (
                        <div key={i}>{task}</div>
                    ))}
                </S.TaskGrid>

                <S.SectionTitle>🙋‍♂️ 담당 역할 및 수행 내역</S.SectionTitle>
                <S.RoleDetailSection>
                    {project?.roles?.map((role) => (
                        <S.RoleGroup key={role?.roleId}>
                            <h3>{role?.groupTitle}</h3>
                            {role?.details && (
                                <ul>
                                    {role?.details?.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            )}
                            {role?.subGroups && (
                                <S.RoleSubGrid>
                                    {role?.subGroups?.map((sub, i) => (
                                        <S.RoleBox key={i}>
                                            <h4>{sub?.name}</h4>
                                            <ul>
                                                {sub?.items.map((item, j) => <li key={j}>{item}</li>)}
                                            </ul>
                                        </S.RoleBox>
                                    ))}
                                </S.RoleSubGrid>
                            )}
                        </S.RoleGroup>
                    ))}
                </S.RoleDetailSection>

                <S.SectionTitle>✅ 문제 해결 (Trouble Shooting)</S.SectionTitle>
                <S.TroubleShootingCard>
                    <S.ProblemSection>
                        <h4>[문제 정의 및 원인 분석]</h4>
                        <p>{project?.troubleshooting?.problem}</p>
                    </S.ProblemSection>
                    <S.SolutionSection>
                        <h4>[해결 방안 및 결과]</h4>
                        <ul>
                            {project?.troubleshooting?.solution?.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </S.SolutionSection>
                </S.TroubleShootingCard>

                <S.SectionTitle>🔍 회고</S.SectionTitle>
                <S.RetrospectCard>
                    <p>{project?.retrospect}</p>
                </S.RetrospectCard>
            </S.ContentWrapper>
        </S.DetailPageLayout>
    );
}

export default ProjectDetailPage;