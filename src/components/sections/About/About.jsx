import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import profileDatas from '../../../data/profile.json';
import { BASE_URL } from '../../../utils/asset';
import { HiOutlineMail, HiOutlineChatAlt2, HiOutlineCode, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { sendEmailService } from '../../../utils/emailService';
import MailModal from '../../common/modal/MailModal/MailModal';

function About({ type = "main" }) {

    const navigate = useNavigate();

    const { profile, education, career, skills, certifications } = profileDatas;

    /*전체 skill*/
    const allSkills = skills ? Object.values(skills).flat() : [];
    /*화면에 보여주는 skill*/
    const displaySkills = skills?.backend?.slice(0, 4) || [];
    /*남은 skill 개수*/
    const remainSkillsCnt = allSkills.length - displaySkills.length;

    /* 최신순 정렬 (ID 기반 내림차순) */
    const sortedEducation = [...education].sort((a, b) => b.educationId - a.educationId);
    const sortedCertifications = [...certifications].sort((a, b) => b.certId - a.certId);
    const sortedCareer = [...career].sort((a, b) => b.careerId - a.careerId);

    /* 메일 모달 열림 상태 */
    const [isModalOpen, setIsModalOpen] = useState(false);
    /* 메일 전송 상태 */
    const [isSending, setIsSending] = useState(false);

    /* 메일 전송 */
    const emailOnClick = () => {
        setIsModalOpen(true);
    };

    const handleSendMail = async (formData) => {
        setIsSending(true);
        try {
            await sendEmailService(formData);
            alert("메시지가 성공적으로 전달되었습니다!");
            setIsModalOpen(false);
        } catch (err) {
            alert("전송에 실패했습니다. 다시 시도해주세요.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        type === "main" ? (
            /* 1. 메인 페이지용 (MainPage) */
            <>
                <S.AboutCardContainer>
                    <S.ProfileTop>
                        <S.ImageWrapper>
                            <img src={`${BASE_URL}${profile?.img}`} alt="profile" />
                        </S.ImageWrapper>
                        <S.NameTag>
                            <h2>{profile?.name}</h2>
                            <p>Flexible Developer</p>
                        </S.NameTag>
                    </S.ProfileTop>

                    <S.SidebarInfo>
                        <S.InfoItem>
                            <span>Birth</span>
                            <p>{profile?.birth}</p>
                        </S.InfoItem>

                        <S.InfoItem>
                            <span>Phone</span>
                            <p>{profile?.phone}</p>
                        </S.InfoItem>

                        <S.InfoItem>
                            <span>Email</span>
                            <S.EmailWrapper onClick={emailOnClick}>
                                <p>{profile?.email}</p>
                                <HiOutlineMail />
                            </S.EmailWrapper>
                        </S.InfoItem>

                        <S.InfoItem>
                            <span>Github</span>
                            <S.GithubWrapper href={profile?.github} target="_blank" rel="noreferrer">
                                <p>Link</p>
                                <FiGithub />
                            </S.GithubWrapper>
                        </S.InfoItem>
                    </S.SidebarInfo>

                    <S.SidebarSkills>
                        <h3>Skills</h3>
                        <S.SkillList>
                            {displaySkills.map((s, i) => (
                                <span key={i}>{s}</span>
                            ))}
                            {remainSkillsCnt > 0 && (
                                <S.MoreButton onClick={() => navigate('/portfolio/about')}>
                                    +{remainSkillsCnt}
                                </S.MoreButton>
                            )}
                        </S.SkillList>
                    </S.SidebarSkills>
                </S.AboutCardContainer>

                <MailModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSend={handleSendMail}
                    isSending={isSending}
                />
            </>
        ) : (
            /* 2. 상세 페이지용 (AboutPage) */
            <S.AboutPageContainer>
                <S.TitleSection>
                    <h1>About Me</h1>
                    <p>{profile?.greeting?.about?.intro}</p>
                </S.TitleSection>

                <S.ProfileSection>
                    <S.ProfileWrapper>
                        <img src={`${BASE_URL}${profile?.img}`} alt="profile" />
                    </S.ProfileWrapper>

                    <S.ProfileDetailInfo>
                        <h2><HiOutlineChatAlt2 /> Development Perspective</h2>
                        <ul>
                            {profile?.aboutSummary?.map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>
                    </S.ProfileDetailInfo>
                </S.ProfileSection>

                <S.GridSection>
                    <S.GridItem>
                        <h3><HiOutlineCode /> Skills</h3>
                        {Object.entries(skills)?.map(([category, items], index) => (
                            <S.SkillGroup key={index}>
                                <h4>{category}</h4>
                                <S.SkillTagContainer>
                                    {items?.map((skill, i) => (
                                        <span key={i}>{skill}</span>
                                    ))}
                                </S.SkillTagContainer>
                            </S.SkillGroup>
                        ))}
                    </S.GridItem>

                    <S.GridItem>
                        <h3><HiOutlineBriefcase /> Career</h3>
                        {sortedCareer.map(item => (
                            <S.DetailInfoItem key={item?.careerId}>
                                <span>{item?.period}</span>
                                <strong>{item?.company}</strong>
                                <p>{item?.project}</p>
                            </S.DetailInfoItem>
                        ))}
                    </S.GridItem>

                    <S.GridItem>
                        <h3><HiOutlineAcademicCap /> Education</h3>
                        {sortedEducation?.map(item => (
                            <S.DetailInfoItem key={item?.educationId}>
                                <span>{item?.period}</span>
                                <strong>{item?.school}</strong>
                                <p>{item?.course || item?.major} {item?.score && `(${item?.score})`}</p>
                            </S.DetailInfoItem>
                        ))}
                    </S.GridItem>

                    <S.GridItem>
                        <h3><HiOutlineBadgeCheck /> Certificates</h3>
                        {sortedCertifications?.map(item => (
                            <S.DetailInfoItem key={item?.certId}>
                                <span>{item?.date}</span>
                                <p>{item?.name} ({item?.status})</p>
                            </S.DetailInfoItem>

                        ))}
                    </S.GridItem>
                </S.GridSection>
            </S.AboutPageContainer>
        )
    );
}

export default About;