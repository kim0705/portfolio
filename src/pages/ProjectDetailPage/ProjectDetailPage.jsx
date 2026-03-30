import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import * as C from '../../styles/common'
import projectsData from '../../data/projects.json';
import { FiArrowLeft, FiCalendar, FiUsers, FiGithub, FiShare, FiCheckCircle, FiSearch, FiZap, FiVideo, FiInfo, FiArrowRight, FiSettings } from "react-icons/fi";
import ProjectFlow from '../../components/common/ProjectFlow/ProjectFlow';
import { flowData } from '../../utils/flowData';
import { BASE_URL } from '../../utils/asset';
import CommonCode from '../../components/sections/CommonCode/CommonCode';

function ProjectDetailPage() {

    const { projectId } = useParams();
    const navigate = useNavigate();

    const [loadedCount, setLoadedCount] = useState(0);
    const [isAllReady, setIsAllReady] = useState(false);

    /* 최신순 정렬 (ID 기반 내림차순) */
    const sortedProjects = [...projectsData].sort((a, b) => b.projectId - a.projectId);
    const project = projectId ? projectsData.find(p => p.projectId === parseInt(projectId)) : sortedProjects[0];

    const totalMediaCount = (project?.images?.length || 0) + (project?.videos?.length || 0);

    /* 미디어 로드 완료 시 호출될 함수 */
    const handleMediaLoadComplete = () => {
        setLoadedCount(prev => {
            const newCount = prev + 1;
            if (newCount >= totalMediaCount) {
                setIsAllReady(true);
            }
            return newCount;
        });
    };

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

                {totalMediaCount > 0 && !isAllReady && (
                    <S.FullPageLoader>
                        <C.LoadingSpinner />
                        <span>데이터 로딩 중... ({loadedCount}/{totalMediaCount})</span>
                    </S.FullPageLoader>
                )}

                {project?.images?.length > 0 && (
                    <S.ProjectImagesSection>
                        {project.images.map((src, idx) => (
                            <S.MediaContainer key={`img-${idx}`}>
                                {/* 전체 로딩 전까지 스켈레톤 표시 */}
                                {!isAllReady && <C.Skeleton />}
                                <img
                                    src={`${BASE_URL}${src}`}
                                    alt={project?.title}
                                    onLoad={handleMediaLoadComplete}
                                    style={{
                                        opacity: isAllReady ? 1 : 0,
                                        visibility: isAllReady ? 'visible' : 'hidden'
                                    }}
                                />
                            </S.MediaContainer>
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

                {project?.videos?.length > 0 && (
                    <>
                        <S.SectionTitle><FiVideo /> 기능 시연 데모</S.SectionTitle>
                        <S.VideoSection>
                            {project.videos.map((video, idx) => {
                                const videoNote = project?.videoNotes?.find(note => note.videoId === idx);
                                return (
                                    <S.VideoItem key={`vid-${idx}`}>
                                        <S.VideoContainer>
                                            {/* 비디오 로딩 중일 때 스켈레톤 표시 */}
                                            {!isAllReady && <C.Skeleton />}
                                            <video
                                                src={`${BASE_URL}${video}`}
                                                controls
                                                autoPlay
                                                muted
                                                playsInline
                                                onCanPlayThrough={handleMediaLoadComplete}
                                                style={{ opacity: isAllReady ? 1 : 0 }}
                                            />
                                        </S.VideoContainer>

                                        {isAllReady && videoNote?.description && (
                                            <S.VideoNoteBox>
                                                <FiInfo />
                                                <span><strong>Technical Note:</strong> {videoNote.description}</span>
                                            </S.VideoNoteBox>
                                        )}
                                    </S.VideoItem>
                                );
                            })}
                        </S.VideoSection>
                    </>
                )}

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
                        </S.RoleGroup>
                    ))}
                </S.RoleDetailSection>

                {project?.projectId === 2 ? (
                    <>
                        <S.SectionTitle><FiSettings /> 공통 코드</S.SectionTitle>
                        <CommonCode />
                    </>
                ) : <></>}

                {flowData[project?.projectId] && (
                    <>
                        <S.SectionTitle><FiZap /> 핵심 로직</S.SectionTitle>
                        <ProjectFlow projectId={project?.projectId} />
                    </>
                )}

                <S.SectionTitle><FiCheckCircle /> 문제 해결</S.SectionTitle>
                <S.TroubleShootingCard>
                    <S.ProblemSection>
                        <h4>[문제 정의 및 원인 분석]</h4>
                        <p>{project?.troubleshooting?.problem}</p>
                        <ul>
                            {project?.troubleshooting?.causes?.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </S.ProblemSection>

                    <S.Divider />

                    <S.ImprovementSection>
                        <h4>[해결 및 개선 성과]</h4>
                        <S.ImprovementGrid>
                            {project?.troubleshooting?.improvements?.map((item, i) => (
                                <S.ImprovementItem key={i}>
                                    <S.ItemHeader>
                                        <S.Badge>Task {i + 1}</S.Badge>
                                        <h5>{item?.title}</h5>
                                    </S.ItemHeader>
                                    <S.ActionDesc>{item?.action}</S.ActionDesc>

                                    <S.ComparisonBox>
                                        <S.AsisSide>
                                            <label>AS-IS</label>
                                            <p>{item?.asis}</p>
                                        </S.AsisSide>

                                        <FiArrowRight />
                                        <S.TobeSide>
                                            <label>TO-BE</label>
                                            <p>{item?.tobe}</p>
                                        </S.TobeSide>
                                    </S.ComparisonBox>
                                </S.ImprovementItem>
                            ))}
                        </S.ImprovementGrid>
                    </S.ImprovementSection>
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