import React from 'react';
import Features from '../features/features';
import SectionHeader from '../section-header/section-header';
import { servicesItem } from '../../constants';
import { ServicesContainer, ServicesFeatureContainer } from './services.styles';

function Services() {
	return (
		<ServicesContainer className="section-container">
			<SectionHeader heading="our services" />

			<ServicesFeatureContainer>
				{
					servicesItem.map(({ image, name, content }) => (
						<Features
							key={name} 
							image={image}
							alt={name}
							heading={name}
							content={content}
						/>
					))
				}
				
			</ServicesFeatureContainer>		
		</ServicesContainer>
	)
}

export default Services