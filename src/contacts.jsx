import React from 'react';

export default class Contacts extends React.Component{
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		document.title = 'Контакты';
	}

	render(){
		return(
			<div>
				<h1>Контакты</h1>
				<table className="table table-striped">
					<tbody>
						<tr>
							<td>Город</td>
							<td>Нижний Новгород</td>
						</tr>
						<tr>
							<td>Телефон</td>
							<td>+7-831-423-04-44, +7-930-713-54-39</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>nizhavto@mail.ru</td>
						</tr>
						<tr>
							<td>Контактное лицо</td>
							<td>Александр</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}