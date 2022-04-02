import { createGlobalStyle } from "styled-components";
import HellixRegularFont from "../fonts/Hellix-Regular.woff";

const GlobalStyles = createGlobalStyle`
	@font-face {
					font-family: 'Hellix';
					src: local('Hellix'),
					url(${HellixRegularFont}) format('woff');
					font-weight: 400;
					font-style: normal;
			}
	:root {
			--primary: cyan;
			--text: #506784;
			--borders: #EBF0F8;
			--page-background: transparent;
			--nav-background: white;
			/* fonts */
			--font-primary: "Hellix", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
			/* add more variables to fill our your system */
			--wrapper: 375px;
			--container: 327px;
			/* add more colors */
			--black-color: #171725;
			--grey-text: #B5B5BE;
			--grey-color: #E2E2EA;
			--blue-dark-color: #0062FF;
			--blue-link: #0062FF;
			--red-color: #FC5A5A;
		}
	*{
			margin: 0;
			padding:0;
			box-sizing: border-box;
	}
	html{
			/* &::-webkit-scrollbar{
					width: 0.5rem;
			}
			&::-webkit-scrollbar-thumb{
					background-color: darkgrey;
			}
			&::-webkit-scrollbar-track {
				background: white;
  		} */
  	box-sizing: border-box;
	}
	body{
			font-family: 'Hellix', sans-serif;
			width: 100%;
	}
	/* h2{
			font-size: 3rem;
			font-weight: lighter;
			color: #333;
	}
	h3{
			font-size: 2rem;
			color: #333;
			padding: 1.5rem 0rem;
	}*/
	p{
			font-size: 1rem;
			line-height: 150%;
			letter-spacing: -0.005rem;
			color: #696969;
	} 
	a{
			text-decoration: none;
			color: #333;
	}
	img{
			display: block;
	}
	ul {
		list-style-type: none;
	}
	input{
			font-weight: bold;
			font-family: 'Hellix', sans-serif;
	}
	.container {
		max-width: var(--container);
		margin-left: auto;
		margin-right: auto;
	}
`;

export default GlobalStyles;
