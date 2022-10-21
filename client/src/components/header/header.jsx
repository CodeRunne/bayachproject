import React from 'react';
import HeaderInfo from '../header-info/header-info';
import Navigation from '../navigation/navigation';

function Header() {
	return (
		<header className="navigation__header">
			<HeaderInfo />
			<Navigation />
		</header>
	)
}

export default Header