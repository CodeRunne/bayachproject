import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: Helvetica,Arial,sans-serif;
		background: var(--white);
	    color: var(--brand-color-alt);
	    font-size: 16px;
	    line-height: 1.7;

	    @media (max-width: 767px) {
	    	font-size: 13.5px;
	    }

	    @media (max-width: 500px) {
	    	font-size: 13px;
	    }

	    @media (min-width: 767px) {
	        aside {
	            display: none;
	        }
	    }
	}

	html, body {
		overflow-x:  hidden;
	}

	.element-section,
	.element-container {
		display: flex;
	    margin-right: auto;
	    margin-left: auto;
	    position: relative;
	}

	.d-flex {
		display: flex;
		flex-wrap: wrap;
	}

	.d-a-cnt {
		align-items: center;
	}

	.d-j-cnt {
		justify-content: center;
	}

	.d-j-sbtw {
		justify-content: space-between;
	}

	.d-j-end {
		justify-content: flex-end;
	}

	.d-fd-column {
	    flex-direction: column;
	}

	.element-info {
	    font-family: "Josefin Sans", Sans-serif;
	    font-size: 14px;
	    font-weight: 300;
	    color: var(--white);
	}

	.element-social-icon {
		font-size: .98em;
	    line-height: .98em;
	    color: var(--white);
	}

	.element-social-icon:hover {
		color: #0c0c0c;
	}

	a:link,
	a:visited {
		text-decoration: none;
	    transition: color .2s;
	}

	img {
		height: auto;
	    max-width: 100%;
	    border: none;
	    border-radius: 0;
	    -webkit-box-shadow: none;
	    box-shadow: none;
	    object-fit: cover;
	}

	ul {
		display: flex;
		list-style: none;
		gap: 1.5rem;
	}

	.container {
	    max-width: 1140px;
	    margin: 0 auto;
	}

	.section-container {
	    margin-top: 100px;

	    @media (max-width: 767px) {
	    	margin-top: 50px;
	        padding: 0 .8rem;
	    }
	}

	.color-success {
		color: var(--color-success);
	}

	.color-failed {
		color: var(--color-failed);
	}
`;