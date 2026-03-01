import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import projectsData from '../../data/projects.json';
import { FiArrowLeft, FiCalendar, FiUsers, FiGithub, FiShare, FiCheckCircle, FiSearch, FiZap, FiChevronsRight } from "react-icons/fi";
import ProjectFlow from '../../components/common/ProjectFlow/ProjectFlow';
import { flowData } from '../../utils/flowData';
import { BASE_URL } from '../../utils/asset';

function ProjectDetailPage() {

    const { projectId } = useParams();
    const navigate = useNavigate();

    /* 최신순 정렬 (ID 기반 내림차순) */
    const sortedProjects = [...projectsData].sort((a, b) => b.projectId - a.projectId);
    const project = projectId ? projectsData.find(p => p.projectId === parseInt(projectId)) : sortedProjects[0];

    return (
        <S.DetailPageLayout>
            <S.ContentWrapper>
                <S.HeaderSection>
                    <span onClick={() => navigate('/projects')}>
                        <FiArrowLeft /> Back to Projects
                    </span>

                    <span>{project?.category}</span>
                    <h1>{project?.title}</h1>

                    <S.ProjectOverview>
                        <span><FiCalendar />참여 기간: {project?.period}</span>
                        <span><FiUsers />개발 인원: {project?.team}</span>

                        {project?.github && (
                            <a href={project?.github} target="_blank" rel="noreferrer">
                                <FiGithub /> GitHub
                            </a>
                        )}

                        {project?.notion && (
                            <a href={project?.notion} target="_blank" rel="noreferrer">
                                <FiShare /> Notion
                            </a>
                        )}
                    </S.ProjectOverview>

                    <p>{project?.description}</p>
                </S.HeaderSection>

                {project?.images?.length > 0 && (
                    <S.ProjectImagesSection>
                        {project?.images?.map((img, idx) => (
                            <img key={idx} src={`${BASE_URL}${img}`} alt={project?.title} />
                        ))}
                    </S.ProjectImagesSection>
                )}

                <S.TechStackSection>
                    {project?.techStack?.map((group, i) => (
                        <S.TechGroup key={i}>
                            <h4>{group?.category}</h4>
                            <S.TechList>
                                {group?.skills?.map((skill, j) => (
                                    <span key={j}>{skill}</span>
                                ))}
                            </S.TechList>
                        </S.TechGroup>
                    ))}
                </S.TechStackSection>

                <S.SectionTitle><FiZap /> 프로젝트 핵심 과업</S.SectionTitle>
                <S.TaskGrid>
                    {project?.tasks?.map((task, i) => (
                        <div key={i}>{task}</div>
                    ))}
                </S.TaskGrid>

                <S.SectionTitle><FiUsers /> 담당 역할 및 수행 내역</S.SectionTitle>
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

                {flowData[project?.projectId] && (
                    <>
                        <S.SectionTitle><FiZap /> 핵심 로직 설계</S.SectionTitle>
                        <ProjectFlow projectId={project?.projectId} />
                    </>
                )}

                <S.SectionTitle><FiCheckCircle /> 문제 해결</S.SectionTitle>
                <S.TroubleShootingCard>
                    <S.ProblemSection>
                        <h4>[문제 정의 및 원인 분석]</h4>
                        <p>{project?.troubleshooting?.problem}</p>
                        <ul>
                            {project?.troubleshooting?.cause?.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </S.ProblemSection>

                    <S.SolutionSection>
                        <h4>[해결 방안]</h4>
                        <ul>
                            {project?.troubleshooting?.solution?.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                        <p><FiChevronsRight />{project?.troubleshooting?.result}</p>
                    </S.SolutionSection>
                </S.TroubleShootingCard>

                <S.SectionTitle><FiSearch /> 회고</S.SectionTitle>
                <S.RetrospectCard>
                    <p>{project?.retrospect}</p>
                </S.RetrospectCard>
            </S.ContentWrapper>
        </S.DetailPageLayout>
    );
}

export default ProjectDetailPage;