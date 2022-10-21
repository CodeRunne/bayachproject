import React from 'react';
import { SpinnerContainer, SpinnerElement } from './spinner.styles';

function Spinner() {
	return (
		<SpinnerContainer className="d-flex d-j-cnt d-a-cnt">
			<SpinnerElement></SpinnerElement>
		</SpinnerContainer>
	)
}

export default Spinner