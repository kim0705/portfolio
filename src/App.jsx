// import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';
import MainPage from './pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {

    return (
        <>
            <Global styles={globalStyles}/>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/portfolio" element={<MainPage/>}/>
                    <Route path="/portfolio/about" element={<AboutPage/>}/>
                    <Route path="/portfolio/project" element={<ProjectPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
