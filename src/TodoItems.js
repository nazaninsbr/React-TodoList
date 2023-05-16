import React, {Component} from "react";

class TodoItems extends Component {
	constructor(props){
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	createTasks(item){
		return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}
	delete(key){
		this.props.delete(key);
	}
	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return(
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

export default TodoItems;


// Here is the version that I would use 

/*

import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItems extends Component {
	createTasks = item => {
		return (
			<li key={item.key}>
				{item.text}
				<button onClick={() => this.delete(item.key)}>Delete</button>
			</li>
		)
	}

	delete = key => {
		this.props.delete(key);
	}

	render() {
		const { entries } = this.props;
		const listItems = entries.map(this.createTasks);

		return (
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
};

TodoItems.propTypes = {
	entries: PropTypes.array.isRequired,
	delete: PropTypes.func.isRequired,
};

export default TodoItems;



*/
