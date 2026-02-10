import React from 'react';
import * as S from './style';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Projects from '../../components/sections/Projects/Projects';

function MainPage() {

	return (
		<S.MainContainer>
			<S.MainSidebar>
				<About type="main" />
			</S.MainSidebar>

			<S.MainContentArea>
				<Hero />
				<Projects type="main" />
			</S.MainContentArea>
		</S.MainContainer>
	);
}

export default MainPage;