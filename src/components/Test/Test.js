import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 1.5em;
	color: ${props => (props.primary ? 'blue' : 'purple')};
`;

const Button = styled.button`
	display: inline-block;
	color: ${props => props.color || 'red'};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid ${props => props.color || 'red'};
	border-radius: 3px;
`;

const Link = Button.withComponent('a');

const TomatoLink = Link.extend`
	color: tomato;
	border-color: tomato;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate360} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 1.2rem;
`;

const styledComponent = () => (
	<Wrapper>
		<Title>Hello World</Title>
		<Title primary>This is Primary</Title>
		<Button color="blue">Normal Button</Button>
		<Link>Normal Link</Link>
		<TomatoLink>Tomato Link</TomatoLink>
		<Rotate>&lt; || &gt;</Rotate>
	</Wrapper>
);

export default styledComponent;
