import MainLayout from './layouts/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import { useEffect, useState } from 'react';
import PageSliderLayout from './layouts/PageSliderLayout/PageSliderLayout';
import { Analytics } from "@vercel/analytics/react";

function App() {

    /* 현재 브라우저가 1024px 이하인지 확인하는 상태값 */
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    /* 브라우저 크기 변화를 감지하여 1024px 이하일 때만 모바일 모드로 전환 */
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Global styles={globalStyles} />
            <Routes>
                {isMobile ? (
                    <Route element={<MainLayout />}>
                        <Route path="/*" element={<PageSliderLayout />} />
                        <Route path="/projects/:projectId" element={<ProjectDetailPage/>}/>
                    </Route>
                ) : (
                    <Route element={<MainLayout />}>
                        <Route path="" element={<MainPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                    </Route>
                )}
            </Routes>

            <Analytics />
        </>
    );
}

export default App;
