import React, { Component } from 'react';
import { render } from 'react-dom';
import Sidedrawer from './index.js';
import './demo.scss';

class Demo extends Component {
	constructor(props) {
		super(props);

		this.close = this.close.bind(this);
		this.toggle = this.toggle.bind(this);

		this.state = {
			isOpen: false
		};
	}

	close() {
		this.setState({
			isOpen: false
		});
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		const customClassNames = {
			overlay: 'custom-overlay',
			sidedrawer: 'custom-sidedrawer'
		};

		return (
			<div>
				<Sidedrawer customClassNames={customClassNames} open={this.state.isOpen} onClose={this.close}>This is child component of Sidedrawer</Sidedrawer>
				<button onClick={this.toggle}>Toggle Sidedrawer</button>
			</div>
		);
	}
}

render(<Demo />,
document.getElementById('app'));