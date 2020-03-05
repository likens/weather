import React from "react";
import styled from "styled-components"
import { unixTimeToDate } from "../Utils";

const Container = styled.div`
    grid-area: footer;
    align-self: flex-end;
    width: 100%;
    text-align: right;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.5;
`
const Location = styled.div`
    text-transform: capitalize;
`
const Updated = styled.div``

const Footer = ({ times, location }) => {

    return (
		<Container>
			<Updated>Last updated @ {unixTimeToDate(times.current)}</Updated>
			<Location>in {location.city ? `${location.city}, ` : ``}{location.state}</Location>
		</Container>
    )
}

export default Footer;
