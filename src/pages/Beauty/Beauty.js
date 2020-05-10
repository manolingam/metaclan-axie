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
						<p className='beauty-contest-name'>Axie #147829</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147829/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button beauty-details-button'
							href='https://marketplace.axieinfinity.com/axie/147829'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>

					<div className='card'>
						<p className='beauty-contest-name'>SuzieCute MQB1</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147909/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button beauty-details-button'
							href='https://marketplace.axieinfinity.com/axie/147909'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
					<div className='card'>
						<p className='beauty-contest-name'>Dusky Cupcake</p>

						<img
							src='https://storage.googleapis.com/assets.axieinfinity.com/axies/147987/axie/axie-full-transparent.png'
							alt=''
						/>

						<a
							className='button beauty-details-button'
							href='https://marketplace.axieinfinity.com/axie/147987'
							target='_blank'
							rel='noopener noreferrer'
						>
							More Details
						</a>
					</div>
				</div>
				{/* {console.log(new Date().getMilliseconds())}
				<Timer
					initialTime={
						new Date().setHours(new Date().getHours() + 1) -
						new Date().getHours()
					}
					direction='backward'
				>
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
					<div className='timer tag'>Contest Over!</div>
				</div>
				<a
					className='button vote-button is-medium'
					href='https://www.strawpoll.me/20006791/r'
					target='_blank'
					rel='noopener noreferrer'
				>
					Results
				</a>
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
