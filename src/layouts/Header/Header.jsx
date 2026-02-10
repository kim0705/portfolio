import React from 'react';
import * as S from './style';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {

	const { pathname } = useLocation();

	return (
		<S.HeaderContainer>
			<S.Navigation>
				<ul>
					<li>
						<NavLink
							to="/portfolio/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink 
							to="/portfolio/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink 
							to="/portfolio/projects">
							Projects
						</NavLink>
					</li>
					{/* <li>
						<NavLink to="/portfolio">
							Contact
						</NavLink>
					</li> */}
				</ul>
			</S.Navigation>
		</S.HeaderContainer>
	);
}

export default Header;