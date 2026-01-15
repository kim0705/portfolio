import React from 'react';
import * as S from './style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <S.LayoutWrapper>
            <Header></Header>

            <S.MainContent>
                <Outlet/>
            </S.MainContent>

            <Footer></Footer>
        </S.LayoutWrapper>
    );
}

export default MainLayout;