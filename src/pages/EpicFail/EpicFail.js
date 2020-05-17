import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Countdown from 'react-countdown';

import 'bulma';

import './EpicFail.css';

const axies = [
	{
		name: 'eggsnake + eggowl',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148463/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148463',
	},
	{
		name: 'Yuckboi',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148074/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148074',
	},
	{
		name: 'Shunned Seagull',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148007/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148007',
	},
];

class EpicFail extends Component {
	state = {
		timeUp: false,
	};
	render() {
		return (
			<div className='ugly'>
				<p className='title' id='ugly-contest-title'>
					Epic Fail Contest
				</p>

				<div className='axies'>
					{axies.map((axie, index) => {
						return (
							<div className='card' key={index}>
								<p className='ugly-contest-name'>{axie.name}</p>
								<img src={axie.image} alt='' />

								<a
									className='button ugly-details-button'
									href={axie.marketplace}
									target='_blank'
									rel='noopener noreferrer'
								>
									More Details
								</a>
							</div>
						);
					})}
				</div>

				{/* <div className='timer-container'>
					<div className='timer tag'>
						<Countdown
							date={new Date('2020-05-17T21:32:00')}
							onComplete={() => this.setState({ timeUp: true })}
						>
							<p>Contest Over!</p>
						</Countdown>
					</div>
				</div> */}
				<a
					className='button vote-button is-medium'
					href='https://www.strawpoll.me/20079651'
					target='_blank'
					rel='noopener noreferrer'
				>
					Vote
				</a>
				{/* {this.state.timeUp ? (
					<a
						className='button vote-button is-medium'
						href='https://www.strawpoll.me/20079651/r'
						target='_blank'
						rel='noopener noreferrer'
					>
						Results
					</a>
				) : (
					<a
						className='button vote-button is-medium'
						href='https://www.strawpoll.me/20079651'
						target='_blank'
						rel='noopener noreferrer'
					>
						Vote
					</a>
				)} */}
				<p
					className='beauty-button inpage-button'
					onClick={() => {
						this.props.history.push('/meta');
					}}
				>
					..to meta contest
				</p>
			</div>
		);
	}
}

export default withRouter(EpicFail);
