import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {

    /* 현재 브라우저가 1024px 이하인지 확인하는 상태값 */
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    /* 브라우저 크기 변화를 감지하여 1024px 이하일 때만 모바일 모드로 전환 */
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <S.LayoutWrapper>
            <Header></Header>

            <S.MainContent>
                <Outlet />
            </S.MainContent>

            {!isMobile && <Footer />}
        </S.LayoutWrapper>
    );
}

export default MainLayout;