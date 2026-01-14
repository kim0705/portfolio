import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import { Global } from '@emotion/react'
import { globalStyles } from './styles/global'
import MainPage from './pages/MainPage/MainPage'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Global styles={globalStyles}/>
            <MainLayout>
                <MainPage/>
            </MainLayout>
        </>
    );
}

export default App;
