import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
	constructor(props){
		super(props);
	    
	}

	componentDidMount() {
		document.title = 'Нижавто. Услуги автовозов и эвакуаторов';
	}


	render(){
		return(
			<div>
				<div className="jumbotron">
            <h1>Автовозы и эвакуаторы</h1>
            <p>Наша компания специализируется на грузоперевозках автомобилей и спецтехники по всей территории России как автовозами, так и эвакуаторами.</p>
            <p>
                <Link className="btn btn-lg btn-primary" to="/products" role="button">Выбрать автовоз</Link>
            </p>
        </div>
				<div className="row">
					<div className="col-md-6">
						<h2>Фотографии</h2>
						<div className="row">
								<div className="col-md-4 col-sm-4 col-xs-6"><a href="/images/products/product-1-1.jpg" data-fancybox><img src="/images/products/product-1-1-thumbnail.jpg" className='img-thumbnail' alt=""/></a></div>
								<div className="col-md-4 col-sm-4 col-xs-6"><a href="/images/products/product-2-1.jpg" data-fancybox><img src="/images/products/product-2-1-thumbnail.jpg" className='img-thumbnail' alt=""/></a></div>
								<div className="col-md-4 col-sm-4 col-xs-6"><a href="/images/products/product-3-1.jpg" data-fancybox><img src="/images/products/product-3-1-thumbnail.jpg" className='img-thumbnail' alt=""/></a></div>
								<div className="col-md-4 col-sm-4 col-xs-6"><a href="/images/products/product-4-1.jpg" data-fancybox><img src="/images/products/product-4-1-thumbnail.jpg" className='img-thumbnail' alt=""/></a></div>
								<div className="col-md-4 col-sm-4 col-xs-6"><a href="/images/products/product-5-1.jpg" data-fancybox><img src="/images/products/product-5-1-thumbnail.jpg" className='img-thumbnail' alt=""/></a></div>
							
						</div>
					</div>
					<div className="col-md-6">
						<h2>Компания Нижавто</h2>
						<p>Большой опыт работы, а так же собственный парк автовозов позволяет оперативно и качественно предоставлять свои услуги. Выбираю нашу компанию, вы получаете надежных партнеров в транспортировке ваших автомобилей. Вы получаете гарантию качества на долгосрочную перспективу.</p>
						<p>Основные преимущества нашей компании:</p>
						<ul>
							<li>мы имеем как собственный так и привлеченный автопарк</li>
							<li>оказываем услуги как юридическим, так и физическим лицам при любой форме расчета</li>
							<li>всегда готовы обсудить возможности сотрудничества с Вами и Вашими коллегами</li>
							<li>готовы предложить гибкие условия при заключении долгосрочных договоров</li>
							<li>каждый перевозимый нами автомобиль застрахован</li>
						</ul>

					</div>

				</div>
				
			</div>
			)
	}
}