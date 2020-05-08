import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Timer from 'react-compound-timer';

import 'bulma';

import './Beauty.css';

class Beauty extends Component {
	state = {};
	render() {
		return (
			<div className='beauty'>
				<p className='title' id='beauty-contest-title'>
					Beauty Contest
				</p>
				<div className='axies'>
					<div className='card'>
						<p className='beauty-contest-name'>Cindrella</p>
						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147739/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button beauty-details-button'
							href='https://marketplace.axieinfinity.com/axie/147739'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='beauty-contest-name'>Saphira</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147739/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button beauty-details-button'
							href='https://marketplace.axieinfinity.com/axie/147739'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='beauty-contest-name'>Shiloh</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147739/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button beauty-details-button'
							href='https://marketplace.axieinfinity.com/axie/147739'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
				</div>
				<Timer initialTime={550000} direction='backward'>
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
					className='ugly-button inpage-button'
					onClick={() => {
						this.props.history.push('/ugly');
					}}
				>
					..to ugly contest
				</p>
			</div>
		);
	}
}

export default withRouter(Beauty);
