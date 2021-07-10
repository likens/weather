import React from "react";
import styled from "styled-components"
import { blurBlock } from "../Utils";

const Container = styled.div`
	${blurBlock}
	grid-gap: 1rem;
`

const Search = ({ geo }) => {

	const name = geo.locations[0].name;
	const state = geo.locations[0].state;
	const country = geo.locations[0].country;

    return (

		<Container>

			{name}, {state}, {country}

		</Container>

    )
}

export default Search;
