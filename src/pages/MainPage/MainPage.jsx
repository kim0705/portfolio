import React from 'react';
import * as C from '../../styles/common';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Projects from '../../components/sections/Projects/Projects';

function MainPage() {
	return (
		<C.MainContent>
			<Hero/>
			<About/>
			<Projects/>
		</C.MainContent>
	);
}

export default MainPage;