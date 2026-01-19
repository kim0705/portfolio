import React from 'react';
import * as C from '../../styles/common';
import About from '../../components/sections/About/About';

function AboutPage() {
    return (
        <C.MainContent>
            <About type="detail"/>
        </C.MainContent>
    );
}

export default AboutPage;