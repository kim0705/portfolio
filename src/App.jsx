import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import { Global } from '@emotion/react'
import { globalStyles } from './styles/global'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Global styles={globalStyles}/>
            <MainLayout>
                <h1>PORTPOLIO</h1>
            </MainLayout>
        </>
    );
}

export default App;
