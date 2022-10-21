import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineCheck } from 'react-icons/ai';
import FormInput from '../form-input/form-input';
import FormSelect from '../form-select/form-select';
import Button from '../button/button';
import { 
	HeroSection, 
	HeroSectionContentContainer,
	HeroSectionHeader,
	HeroSectionHeaderMainText,
	HeroSectionHeaderSubText,
	HeroForm,
	HeroFormContainer,
	Notification
} from './hero.styles';

function Hero() {
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [newsletter, setNewsLetter] = useState({
		name: '',
		email: '',
		phone: '',
		select_option: ''
	}) 

	function handleChange({ target }) {
		const { name, value } = target;

		setNewsLetter({ ...newsletter, [name]: value })
	}


	function submitNewsLetter(e) {
		e.preventDefault();

		const validateNewsLetter = Object.values(newsletter).every(value => value !== "");
		console.log(validateNewsLetter);

		if(validateNewsLetter) {
			axios.post('http://localhost/dv-flamingo/server/', JSON.stringify(newsletter))
				.then(res => {
					if(res.data) {
						setSuccess('Form was successfully submitted');
					}
				})
				.catch(error => {
					setError('Form submission failed');
				})

			setNewsLetter({
				name: '',
				email: '',
				phone: '',
				select_option: ''
			});
		}
	}

	return (
		<HeroSection className="hero d-flex d-j-cnt d-a-cnt"> 
			<HeroSectionContentContainer className="d-j-cnt d-a-cnt">
				<HeroSectionHeader className="d-flex d-fd-column d-a-cnt">
					<HeroSectionHeaderMainText>Increase your <br /> social media presence</HeroSectionHeaderMainText>
					<HeroSectionHeaderSubText>characterize your business offline, get to know your needs and the target</HeroSectionHeaderSubText>
				</HeroSectionHeader>

				<HeroForm onSubmit={submitNewsLetter}>
					<HeroFormContainer>
						<FormInput
							type="text"
							name="name"
							label="Name"
							placeholder="Name"
							value={newsletter.name}
							handleChange={handleChange}
						/>

						<FormInput
							type="email"
							name="email"
							label="Email"
							placeholder="Email"
							value={newsletter.email}
							handleChange={handleChange}
						/>

						<FormInput
							type="phone"
							name="phone"
							label="Phone"
							placeholder="Phone"
							value={newsletter.phone}
							handleChange={handleChange}
						/>

						<FormSelect
							name="select_option"
							label="Do you have a website"
							value={newsletter.select_option}
							handleChange={handleChange}
						/>
					</HeroFormContainer>

					<Button 
						type="submit"
						variant="primary"
						style={{ 
							margin: '1.1rem auto 0 auto',
						}}
					>
						Get A Free Consulation
					</Button>
				</HeroForm>

				{ 
					(success || error) && 
						<Notification className="d-flex d-j-sbtw d-a-cnt">
							<AiOutlineCheck className="color-success" />
							{success || error}
						</Notification>
				}
			</HeroSectionContentContainer>
		</HeroSection>
	)
}

export default Hero