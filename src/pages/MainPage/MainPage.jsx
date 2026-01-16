import React from 'react';
import * as S from './style';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Projects from '../../components/sections/Projects/Projects';

function MainPage() {
	return (
		<S.MainContent>
			<Hero/>
			<About/>
			<Projects/>
		</S.MainContent>
	);
}

export default MainPage;