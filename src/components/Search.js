import React from "react";
import styled from "styled-components"
import { blurBlock } from "../Utils";

const Container = styled.div`
	${blurBlock}
	grid-gap: 1rem;
`

const Search = ({ geo }) => {

	const name = geo[0].name;
	const state = geo[0].state;
	const country = geo[0].country;

    return (

		<Container>

			{name}, {state}, {country}

		</Container>

    )
}

export default Search;
