import React from 'react';
import data from './data.js';

export default class Products extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
		document.title = 'Автовозы и эвакуаторы';
	}

	render(){
		return(
			<div>
				<h1>Автовозы</h1>
				{data.map((item,index) => {
					return (
						<div className="col-md-12 productItem">
							<h3 key={index}>{item.title}</h3>
							<div className="row">
								<div className="col-md-12" dangerouslySetInnerHTML={{__html: item.description}}>
									
								</div>
							</div>
							<div className="row">
								{ 
									item.images.map((itemImage, indexImage) => {
										return(
												<div className="col-md-3 col-sm-3 col-xs-6">
													<a href={'/images/products/' + itemImage.image} data-fancybox>
														<img src={'/images/products/' + itemImage.thumbnail} className='img-thumbnail' />
													</a>
												</div>
											)
									}) 
								}
							</div>
						</div>
						)
				})}
			</div>
			)
	}
}