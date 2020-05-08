import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Timer from 'react-compound-timer';

import 'bulma';

import './Ugly.css';

class Ugly extends Component {
	state = {};
	render() {
		return (
			<div className='ugly'>
				<p className='title' id='ugly-contest-title'>
					Ugly Contest
				</p>
				<div className='axies'>
					<div className='card'>
						<p className='ugly-contest-name'>Dragon</p>
						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147839/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button ugly-details-button'
							href='https://marketplace.axieinfinity.com/axie/147839'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='ugly-contest-name'>Ogre</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147839/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button ugly-details-button'
							href='https://marketplace.axieinfinity.com/axie/147839'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='ugly-more-name'>Golem</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147839/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button ugly-details-button'
							href='https://marketplace.axieinfinity.com/axie/147839'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
				</div>
				<Timer initialTime={80000000} direction='backward'>
					{() => (
						<div className='timer-container'>
							<p className='timer-title'>Contest Ends In</p>
							<div className='timer tag'>
								<Timer.Days /> days <Timer.Hours /> hours{' '}
								<Timer.Minutes /> minutes <Timer.Seconds />{' '}
								seconds
							</div>
						</div>
					)}
				</Timer>
				<button
					className='button vote-button is-medium'
					href='https://marketplace.axieinfinity.com/axie/147839'
					target='_blank'
					rel='noopener noreferrer'
				>
					Vote
				</button>
				<p
					className='beauty-button inpage-button'
					onClick={() => {
						this.props.history.push('/beauty');
					}}
				>
					..to beauty contest
				</p>
			</div>
		);
	}
}

export default withRouter(Ugly);
