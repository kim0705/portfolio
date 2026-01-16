import React from 'react';
import * as S from './style';

function About() {
    return (
        <S.AboutContainer>
            <S.AboutContent>
                <S.ImageWrapper>
                    <img/>
                </S.ImageWrapper>

                <S.TextWrapper>
                    <S.ProfileInfo>
                        <h2>About me</h2>
                        <p>소개~~</p>
                    </S.ProfileInfo>

                    <S.SkillSection>
                        <S.SkillList>
                            <span>Java</span>
                            <span>JSP</span>
                            <span>React</span>
                        </S.SkillList>
                    </S.SkillSection>

                    <S.ButtonWrapper>
                        <S.ProjectButton>
                            더보기
                        </S.ProjectButton>
                    </S.ButtonWrapper>
                </S.TextWrapper>

            </S.AboutContent>
        </S.AboutContainer>
    );
}

export default About;