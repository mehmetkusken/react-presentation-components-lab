import React, { Component } from 'react';

class SimpleComponent extends Component {
	constructor(props) {
		super(props = {mood: 'happy'});
		this.state = {
			mood: props.mood
		}
	}

	handleClick = () => {
		const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
		this.setState({
			mood: mood
		})
	}

	render() {
		return (<div onClick={this.handleClick}>{this.state.mood}</div>)
	}
}

export default SimpleComponent; 