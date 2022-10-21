import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from 'react-icons/io';
import FormLabel from '../form-label/form-label';
import { FormGroup, FormSelectField } from './form-select.styles';

function FormSelect({ label="", handleChange=f=>f, ...otherInputProps }) {
	return (
		<FormGroup className="d-flex d-fd-column" role="group">
			{ <FormLabel label={label} /> }
			<FormSelectField 
				{...otherInputProps} 
				onChange={handleChange}
				required="required"
				aria-required="true"
			>
				<option value="no">No</option>
				<option value="yes">Yes</option>
			</FormSelectField>
			<span className="icon">
				<IoIosArrowDown />
			</span>
		</FormGroup>
	)
}

FormSelect.propTypes = {
	label: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default FormSelect;