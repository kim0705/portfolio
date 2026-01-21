import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<S.HeaderContainer>
			<S.Navigation>
				<ul>
					<li>
						<Link to="/portfolio">
							Home
						</Link>
					</li>
					<li>
						<Link to="/portfolio/about">
							About
						</Link>
					</li>
					<li>
						<Link to="/portfolio/project">
							Projects
						</Link>
					</li>
					{/* <li>
						<Link to="/portfolio">
							Contact
						</Link>
					</li> */}
				</ul>
			</S.Navigation>
		</S.HeaderContainer>
	);
}

export default Header;