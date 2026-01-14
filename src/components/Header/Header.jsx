import React from 'react';
import * as S from './style';

function Header() {
	return (
		<S.HeaderContainer>
			<S.Navigation>
				<ul>
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</S.Navigation>
		</S.HeaderContainer>
	);
}

export default Header;