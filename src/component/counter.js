import React, {Component} from 'react';

class Counter extends Component{
	
	state = {
		count: this.props.value,
		tags: ['tag1','tag2','tag3']
	}

	constructor(prpos){
		super(prpos);
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	render(){
		return (
			<div>
				<span className={this.getBadgeClass()}>{this.formatCount()}</span>
				<button className="btn btn-secondary btn-sm" onClick={() => this.handleIncrementArrow(1)}>Increament</button>
				<button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>

			</div>
		);
		/* below condition is based on true && string result will be string. true && string && 1 result will be 1*/
		/*
			{this.state.tags.length === 0 && "Please enter a new tag"}
			{this.renderTag()}	
		*/
	}

	/*two way of using function with values Begin*/
	handleIncrement(){
		console.log('increment clicked',this)
	}

	handleIncrementArrow = product =>{
		console.log(product)
		this.setState({value: this.state.value + 1})
	}
	/*two way of using function with values End*/
	renderTag(){
		if(this.state.tags.length === 0)
			return <p>There is no tag</p>
			return <ul>{this.state.tags.map(tag => <li key="{tag}">{tag}</li>)}</ul>
	}


	getBadgeClass(){
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary"
		return classes;
	}

	formatCount(){
		let count = this.state.count;
		return count === 0 ? 'zero' : count;
	}

}

export default Counter;