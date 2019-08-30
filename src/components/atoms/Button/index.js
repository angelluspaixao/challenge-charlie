import React from 'react'
import styled, { css } from 'styled-components'
import propTypes from  'prop-types'

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;

	padding: 1rem;
	margin: 0 auto;

	font-family: Helvetica, sans-serif;

	background: ${({color}) => (color ? color: 'mediumTurquoise')};
	color: #fafafa;

	&:hover, &:focus, &:active {
		background: ${({contrastColor}) => (contrastColor ? contrastColor: 'darkTurquoise')};
		color: #f2f2f2;
		border: none;
	}
` 

export default Button;