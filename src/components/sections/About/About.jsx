import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

function About({ type = "main" }) {
    const navigate = useNavigate();

    return (
        type === "main" ? (
            /* 1. 메인 페이지용 (MainPage) */
            <S.AboutContainer>
                <S.AboutContent>
                    <S.ImageWrapper>
                        <img src={null} alt="Profile" />
                    </S.ImageWrapper>

                    <S.TextWrapper>
                        <S.ProfileInfo>
                            <h2>About me</h2>
                            <p>사용자의 경험을 소중히 여기는 프론트엔드 개발자 김유진입니다.</p>
                        </S.ProfileInfo>

                        <S.SkillSection>
                            <S.SkillList>
                                <span>Java</span>
                                <span>React</span>
                                <span>Emotion</span>
                            </S.SkillList>
                        </S.SkillSection>

                        <S.ButtonWrapper>
                            <S.ProjectButton onClick={() => navigate('/portfolio/about')}>
                                더보기
                            </S.ProjectButton>
                        </S.ButtonWrapper>
                    </S.TextWrapper>
                </S.AboutContent>
            </S.AboutContainer>
        ) : (
            /* 2. 상세 페이지용 (AboutPage) */
            <S.AboutPageContainer>
                <S.TitleSection>
                    <h1>About Me</h1>
                    <p>안녕하세요, 끊임없이 성장하는 개발자 김유진입니다.</p>
                </S.TitleSection>

                <S.ProfileSection>
                    <S.ProfileWrapper>
                        <img src={null} alt="Profile" />
                    </S.ProfileWrapper>

                    <S.ProfileDetailInfo>
                        <h2>Yu Jin Kim</h2>
                        <ul className="basic-info-list">
                            <li><span>Birth</span> 19XX.XX.XX</li>
                            <li><span>Email</span> yujin@example.com</li>
                            <li><span>Github</span> <a href="https://github.com/..." target="_blank" rel="noreferrer">github.com/yujin</a></li>
                        </ul>
                    </S.ProfileDetailInfo>
                </S.ProfileSection>

                <S.GridSection>
                    <S.GridItem>
                        <h3>Skills</h3>
                        <S.SkillGroup>
                            <h4>Proficient</h4>
                            <S.SkillTagContainer>
                                <span>Java</span>
                                <span>React</span>
                                <span>Spring</span>
                            </S.SkillTagContainer>
                        </S.SkillGroup>

                        <S.SkillGroup>
                            <h4>Familiar</h4>
                            <S.SkillTagContainer>
                                <span>JavaScript</span>
                                <span>Emotion</span>
                                <span>SQL</span>
                            </S.SkillTagContainer>
                        </S.SkillGroup>
                    </S.GridItem>

                    <S.GridItem>
                        <h3>Experience</h3>
                        <div className="history-entry">
                            <span className="date">2023.01 - 2023.06</span>
                            <p>웹 프로젝트 개발 및 유지보수</p>
                        </div>
                    </S.GridItem>

                    <S.GridItem>
                        <h3>Education</h3>
                        <div className="history-entry">
                            <span className="date">2018.03 - 2022.02</span>
                            <p>OO대학교 컴퓨터공학 전공</p>
                        </div>
                    </S.GridItem>

                    <S.GridItem>
                        <h3>Certificates</h3>
                        <div className="history-entry">
                            <span className="date">2023.05</span>
                            <p>정보처리기사 자격 취득</p>
                        </div>
                    </S.GridItem>
                </S.GridSection>
            </S.AboutPageContainer>
        )
    );
}

export default About;