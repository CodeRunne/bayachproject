import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '../form-label/form-label';
import { FormInputField } from './form-input.styles';

function FormInput({ label="", handleChange=f=>f, ...otherInputProps }) {
	return (
		<div className="form-group d-flex d-fd-column" role="group">
			{ <FormLabel label={label} /> }
			<FormInputField 
				{ ...otherInputProps }
				onChange={handleChange}
				required
				aria-required="true"
			/>
		</div>
	)
}

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default FormInput;