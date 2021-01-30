import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components"
import { blurBlock, formatDateTime } from "../Utils";


const Container = styled.div`
	text-align: center;
	padding: 0 0 1rem;
`

const Button = styled.button`
	background: rgba(0,0,0,.4);
	border-radius: .5rem;
	border: 0;
	outline: 0;
	color: inherit;
	font-family: inherit;
	letter-spacing: .1rem;
	font-weight: 700;
	text-transform:uppercase;
	padding: .75rem 1.5rem;
	font-size: 1.4rem;
	cursor: pointer;
`

const Modal = styled.div`
	${blurBlock}
	background: rgba(0,0,0,.5);
	width: calc(100% - 4rem);
	top: 25%;
	left: 50%;
	transform: translate(-50%, -25%);
	position: absolute;
	z-index: 4000;
	max-height: 75vh;
	height: min-content;
	align-content: flex-start;
	animation: modalBox .5s;
`

const Overlay = styled.div`
	position: fixed;
	z-index: 3000;
	background: rgba(0,0,0,.6);
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	animation: modalOverlay .5s;
`

const ModalClose = styled.button`
	border: 0;
	outline: 0;
	background: 0;
	font-family: inherit;
	color: inherit;
	position: absolute;
	right: 1.5rem;
	top: 1.9rem;
	font-weight: 700;
	font-size: 2rem;
	width: 2.4rem;
	height: 2.4rem;
	padding: 0;
	cursor: pointer;
`;

const ModalBody = styled.div`
	display: grid;
	grid-gap: 4rem;
	height: 100%;
	overflow: auto;
`;

const AlertFull = styled.div`
	display: grid;
	grid-gap: 1rem;
`

const AlertEvent = styled.div`
	letter-spacing: .1rem;
	text-transform:uppercase;
	font-weight: 700;
	display: flex;
	align-items:center;
	flex-wrap: wrap;
`;

const AlertDescription = styled.div`
	font-size: 1.4rem;
`;
const AlertMisc = styled.div`
	color: var(--grayed);
	font-size: 1.3rem;
	font-style: italic;
`;

const AlertTime = styled.div``;
// const AlertAuthor = styled.div``;

const AlertsModal = ({ children, onClose }) => {
	return createPortal(
		<>
			<Modal>
				<ModalClose onClick={onClose}>X</ModalClose>
				<ModalBody>
					{children}
				</ModalBody>
			</Modal>
			<Overlay onClick={onClose}></Overlay>
		</>, document.getElementById("portal")
	);
};

const AlertsItem = ({ alert }) => {
	return(
		<>
			<AlertFull>
				<AlertEvent>{alert.event}</AlertEvent>
				<AlertDescription>{alert.description}</AlertDescription>
				<AlertMisc>
					<AlertTime>{formatDateTime(alert.start)} &ndash; {formatDateTime(alert.end)}</AlertTime>
					{/* <AlertAuthor>{alert.sender_name}</AlertAuthor> */}
				</AlertMisc>
			</AlertFull>
		</>
	);
};

class Alerts extends Component {
	
	constructor() {
		super()
		this.state = {
			modalActive: false
		}
	}

	componentDidMount() {
		
	}

	toggleAlerts() {
		document.body.classList.toggle("modal-active");
		this.setState({modalActive: !this.state.modalActive})
	}

	render() {
		return (
			<Container>
				<Button onClick={() => this.toggleAlerts()}>{this.props.alerts.length} Weather Alerts</Button>
				{this.state.modalActive && (
					<AlertsModal alerts={this.props.alerts} onClose={() => this.toggleAlerts()}>
						{this.props.alerts.map((a, i) => <AlertsItem key={i} alert={a} />)}
					</AlertsModal>
				)}
			</Container>
		)
	}
}

export default Alerts;
