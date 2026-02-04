import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../../data/projects.json';
import { BASE_URL } from '../../../utils/asset';

function Projects({ type = "main" }) {
    const navigate = useNavigate();

    /* 최신순 정렬 (ID 기반 내림차순) */
    const sortedProjects = [...projectsData].sort((a, b) => b.projectId - a.projectId);
    /* 메인 페이지에서는 최신 프로젝트 3개만 보여주기 위한 슬라이싱 */
    const mainProjects = type === "main" ? sortedProjects.slice(0, 3) : sortedProjects;

    /* 상세 페이지 이동 */
    const projectDetailOnClick = (id) => {
        navigate(`/portfolio/projects/${id}`);
    };

    /* 외부 링크 이동 */
    const externalLinkOnClick = (e, url) => {
        e.stopPropagation();
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        type === "main" ? (
            /* 1. 메인 페이지용 (MainPage) */
            <S.ProjectContainer>
                <S.ProjectContent>
                    <S.ProjectHeader>
                        <h2>Projects</h2>
                    </S.ProjectHeader>

                    <S.ProjectCardContainer>
                        {mainProjects?.map((project) => (
                            <S.ProjectCard key={project?.projectId} onClick={() => projectDetailOnClick(project?.projectId)}>
                                <S.CardImageWrapper>
                                    <img src={`${BASE_URL}${project?.img}`} alt={project?.title} />
                                </S.CardImageWrapper>

                                <S.CardInfo>
                                    <span>{project?.category}</span>
                                    <h3>{project?.title}</h3>
                                    <p>{project?.description}</p>
                                    <S.TagList>
                                        {project?.techStack?.slice(0, 4).map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                        ))}
                                    </S.TagList>
                                </S.CardInfo>
                            </S.ProjectCard>
                        ))}
                    </S.ProjectCardContainer>
                </S.ProjectContent>
            </S.ProjectContainer>
        ) : (
            /* 2. 상세 페이지용 (ProjectPage) - 전체 목록 */
            <S.ProjectPageContainer>
                <S.TitleSection>
                    <h1>My Projects</h1>
                    <p>프론트엔드 및 백엔드 기술을 활용한 프로젝트 결과물입니다.</p>
                </S.TitleSection>

                <S.ProjectGrid>
                    {mainProjects.map((project) => (
                        <S.ProjectCard key={project?.projectId} onClick={() => projectDetailOnClick(project?.projectId)}>
                            <S.CardImageWrapper>
                                <img src={`${BASE_URL}${project?.img}`} alt={project?.title} />
                            </S.CardImageWrapper>
                            <S.CardInfo>
                                <span>{project?.category}</span>
                                <h3>{project?.title}</h3>
                                <p>{project?.description}</p>
                                <S.TagList>
                                    {project?.techStack?.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </S.TagList>
                                <S.LinkWrapper>
                                    {project?.github && (
                                        <button onClick={(e) => externalLinkOnClick(e, project.github)}>Github</button>
                                    )}
                                    {project?.notion && (
                                        <button onClick={(e) => externalLinkOnClick(e, project.notion)}>Notion</button>
                                    )}
                                </S.LinkWrapper>
                            </S.CardInfo>
                        </S.ProjectCard>
                    ))}
                </S.ProjectGrid>
            </S.ProjectPageContainer>
        )
    );
}

export default Projects;