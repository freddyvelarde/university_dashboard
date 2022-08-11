import styled from 'styled-components';

export const CardStyled = styled.div`
	padding: 2vh 2%;
	padding-bottom: 5vh;
	background: ${({ color }) => color.secondary};
	width: 450px;
	min-height: 10vh;
	border-radius: 8px;
	margin-bottom: 5vh;
	h2 {
		font-size: 17px;
		margin-bottom: 2vh;
	}
	span {
		color: ${({ color }) => color.hover};
		text-transform: uppercase;
		font-family: 'Times New Roman', Times, serif;
	}
	a {
		color: ${({ color }) => color.text};
		padding: 1.5vh 30%;
		border-radius: 7px;
		background: ${({ color }) => color.button};
		&:hover {
			background: ${({ color }) => color.hover};
		}
	}
	.title {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
			sans-serif;
		text-transform: uppercase;
		margin-bottom: 5vh;
	}
`;
