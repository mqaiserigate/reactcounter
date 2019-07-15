import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component{

	state = {
		counters:[
			{ id:1, value:1},
			{ id:2, value:2},
			{ id:3, value:3},
			{ id:4, value:4}
		]
	}

	handleDelete = (counterId) => {
		console.log(counterId);
		const counters = this.state.counters.filter(c => c.id !== counterId);
		console.log(counters)
		this.setState({counters});
	}

	render(){
		return(
			<div>	
				{this.state.counters.map(counter => <Counter id={counter.id} onDelete={this.handleDelete} key={counter.id} value={counter.value} selected={true}/>)}
			</div>
		)
	}

}

export default Counters;
