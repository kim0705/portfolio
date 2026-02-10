import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../../data/projects.json';
import { BASE_URL } from '../../../utils/asset';
import { DEFAULT_IMAGE } from '../../../utils/asset';
import { HiOutlineFolderOpen } from "react-icons/hi2";

function Projects({ type = "main" }) {
    const navigate = useNavigate();

    /* 최신순 정렬 (ID 기반 내림차순) */
    const sortedProjects = [...projectsData].sort((a, b) => b.projectId - a.projectId);
    /* 메인/디테일 페이지 프로젝트*/
    const displayProjects = type === "main" ? sortedProjects.slice(0, 3) : sortedProjects;
    /* 메인/디테일 페이지 프로젝트 및 기술 스택 */
    const projectList = displayProjects.map(project => {

        const allStacks = project?.techStack?.flatMap(group => group.skills);
        const displayStacks = type === "main" ? allStacks.slice(0, 4) : allStacks;
        const remainStacksCnt = allStacks.length - displayStacks.length;

        return {
            ...project,
            displayStacks,
            remainStacksCnt
        };
    });

    /* 상세 페이지 이동 */
    const projectDetailOnClick = (id) => {
        navigate(`/portfolio/projects/${id}`);
    };

    return (
        type === "main" ? (
            /* 1. 메인 페이지용 (MainPage) */
            <S.ProjectContainer>
                <S.ProjectContent>
                    <S.ProjectHeader>
                        <h2><HiOutlineFolderOpen /> Projects</h2>
                    </S.ProjectHeader>

                    <S.ProjectCardContainer>
                        {projectList?.map((project) => (
                            <S.CardAnimationWrapper key={project?.projectId}>
                                <S.ProjectCard onClick={() => projectDetailOnClick(project?.projectId)}>
                                    <S.CardImageWrapper>
                                        <img src={project?.img ? `${BASE_URL}${project?.img}` : `${BASE_URL}${DEFAULT_IMAGE}`} alt={project?.title} />
                                    </S.CardImageWrapper>

                                    <S.CardInfo type="main">
                                        <span>{project?.category}</span>
                                        <h3>{project?.title}</h3>
                                        <p>{project?.description}</p>
                                        <S.TagList>
                                            {project?.displayStacks?.map((stack, i) => (
                                                <span key={i}>{stack}</span>
                                            ))}
                                            {project?.remainStacksCnt > 0 && (
                                                <button>+{project?.remainStacksCnt}</button>
                                            )}
                                        </S.TagList>
                                    </S.CardInfo>
                                </S.ProjectCard>
                            </S.CardAnimationWrapper>
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
                    {projectList.map((project) => (
                        <S.CardAnimationWrapper key={project?.projectId}>
                            <S.ProjectCard onClick={() => projectDetailOnClick(project?.projectId)}>
                                <S.CardImageWrapper>
                                    <img src={project?.img ? `${BASE_URL}${project?.img}` : `${BASE_URL}${DEFAULT_IMAGE}`} alt={project?.title} />
                                </S.CardImageWrapper>
                                <S.CardInfo type="detail">
                                    <span>{project?.category}</span>
                                    <h3>{project?.title}</h3>
                                    <p>{project?.description}</p>
                                    <S.TagList>
                                        {project?.displayStacks?.map((stack, i) => (
                                            <span key={i}>{stack}</span>
                                        ))}
                                    </S.TagList>
                                </S.CardInfo>
                            </S.ProjectCard>
                        </S.CardAnimationWrapper>
                    ))}
                </S.ProjectGrid>
            </S.ProjectPageContainer>
        )
    );
}

export default Projects;