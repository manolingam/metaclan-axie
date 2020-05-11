import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AxieLogo from '../../assets/axie-logo.jpg';

import 'bulma';

import './Home.css';

class Home extends Component {
	state = {};
	render() {
		return (
			<div className='home'>
				<img id='axie-logo' src={AxieLogo} alt='' />

				<div className='contest-links'>
					<button
						className='button beauty-button'
						onClick={() => {
							this.props.history.push('/beauty');
						}}
					>
						Beauty Contest
					</button>
					<button
						className='button ugly-button'
						onClick={() => {
							this.props.history.push('/ugly');
						}}
					>
						Ugly Contest
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Home);
