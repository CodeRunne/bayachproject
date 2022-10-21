import React from 'react';
import PropTypes from 'prop-types';
import { IoClose } from 'react-icons/io5';
import Button from '../button/button'; 
import HeaderInfo from '../header-info/header-info';
import NavigationLinks from '../navigation-links/navigation-links';
import { navigationLinks } from '../../constants';
import { 
	OffsetContainer,
	OffsetHeader,
	OffsetLinkItems 
} from './offset.styles';

function Offset({ isOpen, setIsOpen }) {
	return (
		<OffsetContainer style={{ right: isOpen ? '0' : '-1000px' }}>
			{/* Offset Header */}
			<OffsetHeader>
				{/* Offset Close Button */}
				<Button 
					onClick={() => setIsOpen(false)}
					style={{ 
						width: 'max-content',
						background: 'transparent',
						color: 'var(--white)',
						fontSize: '1.2rem'
					}}
				>
					<IoClose />
				</Button>

				{/* Header Info */}
				<HeaderInfo />
			</OffsetHeader>

			{/* Offset Link Items */}
			<OffsetLinkItems className="d-flex d-fd-column d-a-cnt">
				{navigationLinks.map(({ url, name }) => <NavigationLinks key={url} url={url} name={name} /> )}
			</OffsetLinkItems>
		</OffsetContainer>
	)
}

Offset.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired
}

export default Offset