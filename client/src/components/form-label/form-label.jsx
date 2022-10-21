import React from 'react';
import PropTypes from 'prop-types';
import { FormLabelText } from './form-label.styles';

function FormLabel({ label="" }) {
	return (
		<FormLabelText>
			{label}
			<span>*</span>
		</FormLabelText>
	)
}

FormLabel.propTypes = {
	label: PropTypes.string.isRequired
};

export default FormLabel;