import React from 'react';
import * as S from './style';

function Projects() {
    return (
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
    );
}

export default Projects;