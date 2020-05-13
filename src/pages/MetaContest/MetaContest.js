import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Countdown from 'react-countdown';

import 'bulma';

import './MetaContest.css';

const axies = [
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
	{
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147829',
	},
];

class MetaContest extends Component {
	state = {};
	render() {
		return (
			<div className='beauty'>
				<p className='title' id='beauty-contest-title'>
					Meta Contest
				</p>
				<div className='axies'>
					{axies.map((axie, index) => {
						return (
							<div className='card' key={index}>
								<p className='beauty-contest-name'>
									Axie #{index}
								</p>
								<img src={axie.image} alt='' />

								<a
									className='button beauty-details-button'
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

				<div className='timer-container'>
					<div className='timer tag'>
						<Countdown date={new Date('2020-05-12T13:14:00')}>
							<p>Contest Over!</p>
						</Countdown>
					</div>
				</div>
				{this.state.timeUp ? (
					<p>Contest Ended!</p>
				) : (
					<a
						className='button vote-button is-medium'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						Vote
					</a>
				)}

				<p
					className='ugly-button inpage-button'
					onClick={() => {
						this.props.history.push('/ugly');
					}}
				>
					..to epic fail contest
				</p>
			</div>
		);
	}
}

export default withRouter(MetaContest);
