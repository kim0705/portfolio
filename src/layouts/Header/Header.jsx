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
							to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink 
							to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink 
							to="/projects">
							Projects
						</NavLink>
					</li>
					{/* <li>
						<NavLink to="">
							Contact
						</NavLink>
					</li> */}
				</ul>
			</S.Navigation>
		</S.HeaderContainer>
	);
}

export default Header;