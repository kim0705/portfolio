import React from 'react';
import * as S from './style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function MainLayout({ children }) {
    return (
        <S.LayoutWrapper>
            <Header></Header>

            <S.MainContent>
                {children}
            </S.MainContent>

            <Footer></Footer>
        </S.LayoutWrapper>
    );
}

export default MainLayout;