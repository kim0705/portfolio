import MainLayout from './layouts/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage';
import PageSliderLayout from './layouts/PageSliderLayout/PageSliderLayout.JSX';
import { useEffect, useState } from 'react';

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
                        <Route path="/portfolio/*" element={<PageSliderLayout />} />
                        <Route path="/portfolio/projects/:projectId" element={<ProjectDetailPage/>}/>
                    </Route>
                ) : (
                    <Route element={<MainLayout />}>
                        <Route path="/portfolio" element={<MainPage />} />
                        <Route path="/portfolio/about" element={<AboutPage />} />
                        <Route path="/portfolio/projects" element={<ProjectPage />} />
                        <Route path="/portfolio/projects/:projectId" element={<ProjectDetailPage />} />
                    </Route>
                )}
            </Routes>
        </>
    );
}

export default App;
