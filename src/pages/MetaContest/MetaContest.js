import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Countdown from 'react-countdown';

import 'bulma';

import './MetaContest.css';

const axies = [
	{
		name: 'Axie #148440',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148440/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148440',
	},
	{
		name: 'Nando Parrado',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147998/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147998',
	},
	{
		name: 'Axie #147796',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147796/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147796',
	},
	{
		name: 'Gary Bugsey',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148238/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148238',
	},
	{
		name: 'Sheldon Briggs',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147833/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147833',
	},
	{
		name: 'Murple Surple',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148006/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148006',
	},
	{
		name: "Mom's delight",
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148556/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148556',
	},
	{
		name: 'Sakura Salad',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/147924/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/147924',
	},
	{
		name: 'The Hulk',
		image:
			'https://storage.googleapis.com/assets.axieinfinity.com/axies/148480/axie/axie-full-transparent.png',
		marketplace: 'https://marketplace.axieinfinity.com/axie/148480',
	},
];

class MetaContest extends Component {
	state = {
		timeUp: false,
	};
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
									{axie.name}
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
						<Countdown
							date={new Date('2020-05-17T21:30:00')}
							onComplete={() => this.setState({ timeUp: true })}
						>
							<p>Contest Over!</p>
						</Countdown>
					</div>
				</div>
				{this.state.timeUp ? (
					<a
						className='button vote-button is-medium'
						href=''
						target='_blank'
						rel='noopener noreferrer'
					>
						Results
					</a>
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
