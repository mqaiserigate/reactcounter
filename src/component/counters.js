import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component{

	state = {
		counters:[
			{id:1, value:0},
			{id:2, value:4},
			{id:3, value:0},
			{id:4, value:3}
		]
	}

	handleDelete = (counterId) => {
		console.log('event handeler called',counterId)
	}

	render(){
		return(
			<div>	
				{this.state.counters.map(counter => <Counter onDelete={this.handleDelete} key={counter.id} value={counter.value} selected={true}/>)}
			</div>
		)
	}

}

export default Counters;
