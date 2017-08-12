import React from 'react';

export default class Distance extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.title = 'Расчет дистанции';
	}


	render(){
		return(
			<div>
				<h1>Расчет дистанции</h1>
				<iframe width='100%' height='1000px' src="./distance-frame.html" frameborder="0"></iframe>
			</div>
			)
	}
}