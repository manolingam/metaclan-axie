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
						<p className='ugly-contest-name'>Ariel's Nightmare</p>
						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/148145/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button ugly-details-button'
							href='https://marketplace.axieinfinity.com/axie/148145'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='ugly-contest-name'>Ugly Vasilis</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147798/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button ugly-details-button'
							href='https://marketplace.axieinfinity.com/axie/147798'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='ugly-contest-name'>LuggerUgger MQB9</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147975/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button ugly-details-button'
							href='https://marketplace.axieinfinity.com/axie/147975'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
				</div>
				{/* <Timer initialTime={3620000} direction='backward'>
					{() => (
						<div className='timer-container'>
							<p className='timer-title'>Contest Ends In</p>
							<div className='timer tag'>
								<Timer.Hours /> hour <Timer.Minutes /> minutes{' '}
								<Timer.Seconds /> seconds
							</div>
						</div>
					)}
				</Timer> */}
				<div className='timer-container'>
					<p className='timer-title'>Contest Ends On</p>
					<div className='timer tag'>May 10 2020, 10.25</div>
				</div>
				<a
					className='button vote-button is-medium'
					href='https://www.strawpoll.me/20006801'
					target='_blank'
					rel='noopener noreferrer'
				>
					Vote
				</a>
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
