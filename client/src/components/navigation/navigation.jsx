import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Button from '../button/button';
import Offset from '../offset/offset';
import NavigationLinks from '../navigation-links/navigation-links';
import { navigationLinks } from '../../constants';
import Favicon from '../../assets/favicon/favicon.png';
import { NavigationContainer, NavigationWrapper, NavigationLinkImage } from './navigation.styles';

function Navigation() {
	const [navigationFixed, setNavigationFixed] = useState(false);
	const [offsetIsOpen, setOffsetIsOpen] = useState(false);


	useEffect(() => {
		window.addEventListener('scroll', () => {
			if(window.scrollY > 120) {
				setNavigationFixed(true);
			} else {
				setNavigationFixed(false);
			}
		})
	}, [])

	return (
		<>
			<Offset isOpen={offsetIsOpen} setIsOpen={setOffsetIsOpen} /> 

			<NavigationContainer 
				className="navigation"
				style={{
					position: navigationFixed ? 'fixed' : '',
					top: navigationFixed ? 0 : '',
					boxShadow: navigationFixed ? '1.3px 0 5px rgba(0,0,0,0.09)' : ''
				}}
			>
				<NavigationWrapper className="d-flex d-j-sbtw d-a-cnt element-container" style={{
					padding: navigationFixed ? '.4rem' : '.7rem'
				}}>
					<Link to="/">
						<NavigationLinkImage src={Favicon} alt="dv flamingo logo" />
					</Link>

					<ul>
						{navigationLinks.map(({ url, name }) => (
							<NavigationLinks key={url} url={url} name={name} />
						))}					
					</ul>

					<Button 
						onClick={() => setOffsetIsOpen(!offsetIsOpen)}
						style={{
							background: 'transparent',
							width: 'max-content'
						}}
					>
						<FaBars />
					</Button>
				</NavigationWrapper>
			</NavigationContainer>
		</>
	)
}

export default Navigation;