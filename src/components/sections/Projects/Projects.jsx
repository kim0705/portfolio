import React from 'react';
import * as S from './style';

function Projects({ type = "main" }) {
    return (
        type === "main" ? (
            /* 1. 메인 페이지용 (MainPage) */
            <S.ProjectContainer>
                <S.ProjectContent>
                    <S.ProjectHeader>
                        <h2>Projects</h2>
                    </S.ProjectHeader>

                    <S.ProjectCardContainer>
                        <S.ProjectCard>
                            <S.CardImageWrapper>
                                <img src="" alt="" />
                            </S.CardImageWrapper>

                            <S.CardInfo>
                                <h3>Project Title</h3>
                                <p></p>
                                <S.TagList>
                                    <span>Java</span>
                                </S.TagList>
                            </S.CardInfo>
                        </S.ProjectCard>
                        <S.ProjectCard>
                            <S.CardImageWrapper>
                                <img src="" alt="" />
                            </S.CardImageWrapper>

                            <S.CardInfo>
                                <h3>Project Title</h3>
                                <p></p>
                                <S.TagList>
                                    <span>Java</span>
                                </S.TagList>
                            </S.CardInfo>
                        </S.ProjectCard>
                        <S.ProjectCard>
                            <S.CardImageWrapper>
                                <img src="" alt="" />
                            </S.CardImageWrapper>

                            <S.CardInfo>
                                <h3>Project Title</h3>
                                <p></p>
                                <S.TagList>
                                    <span>Java</span>
                                </S.TagList>
                            </S.CardInfo>
                        </S.ProjectCard>
                    </S.ProjectCardContainer>
                </S.ProjectContent>
            </S.ProjectContainer>
            ) : (
                /* 2. 상세 페이지용 (ProjectPage) */
                <S.ProjectPageContainer>
                    <S.TitleSection>
                        <h1>My Projects</h1>
                        <p>프론트엔드 및 백엔드 기술을 활용한 프로젝트 결과물입니다.</p>
                    </S.TitleSection>

                    <S.ProjectGrid type="page">
                        {[1, 2, 3, 4].map((item) => (
                            <S.ProjectCard key={item} type="page">
                                <S.CardImageWrapper>
                                    <img src={null} alt="Project Thumbnail" />
                                </S.CardImageWrapper>
                                <S.CardInfo>
                                    <span className="category">Web Development</span>
                                    <h3>Project Title {item}</h3>
                                    <p>프로젝트의 주요 기능과 특징을 상세히 설명하는 영역입니다.</p>
                                    <S.TagList>
                                        <span>Java</span>
                                        <span>React</span>
                                        <span>MySQL</span>
                                    </S.TagList>
                                    <S.LinkWrapper>
                                        <button>Github</button>
                                        <button>Demo</button>
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