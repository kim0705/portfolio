import React from 'react';
import * as C from '../../styles/common';
import Projects from '../../components/sections/Projects/Projects';

function ProjectPage() {
    return (
        <C.MainContent>
            <Projects type="detail"/>
        </C.MainContent>
    );
}

export default ProjectPage;