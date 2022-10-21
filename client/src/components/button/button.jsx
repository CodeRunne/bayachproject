import React from 'react';
import { ButtonElement } from './button.styles';

function Button({ children, ...otherButtonProps }) {
	return (
		<ButtonElement className="d-flex d-j-cnt d-a-cnt" {...otherButtonProps}>
			{children}
		</ButtonElement>
	)
}

export default Button;