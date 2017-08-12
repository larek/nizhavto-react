import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home.jsx';
import Products from './products.jsx';
import Distance from './distance.jsx';
import Contacts from './contacts.jsx';

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
				<Router>
					<div>
					<div className="header-banner">
						<Link to='/'><img src="./images/logo.png" className='header-logo' alt=""/></Link>
						<div className="headerDescription">Услуги автовозов и эвакуаторов</div>
						<div className="headerPhone">423-04-44</div>
					</div>
			        <nav className="navbar navbar-default">
			            <div className="container-fluid">
			                <div className="navbar-header">
			                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			                        <span className="sr-only">Toggle navigation</span>
			                        <span className="icon-bar"></span>
			                        <span className="icon-bar"></span>
			                        <span className="icon-bar"></span>
			                    </button>
			                    <Link className="navbar-brand" to="/">Нижавто</Link>
			                </div>
			                <div id="navbar" className="navbar-collapse collapse">
			                    <ul className="nav navbar-nav">
			                        <li className="active"><Link to="/">Главная</Link></li>
			                        <li><Link to="/products">Автовозы</Link></li>
			                        <li><Link to="/distance">Расчет расстояний</Link></li>
			                        <li><Link to="/contacts">Контакты</Link></li>
			                    </ul>
			                 
			                </div>
			            </div>
			        </nav>

			        <Route exact path="/" component={Home}/>
					<Route path="/products" component={Products}/>
					<Route path="/distance" component={Distance}/>
					<Route path="/contacts" component={Contacts}/>

					</div>
				</Router>
			)
	}
}

class Html extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render(){

		return (
				<html lang="en">
					<head>
					    <meta charset="UTF-8" />
					    <meta name="viewport" content="width=device-width, initial-scale=1" />
					    <title>Нижавто. Услуги автовозов и эвакуаторов</title>
					    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
					    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.20/jquery.fancybox.min.css" />
					    <link rel="stylesheet" href="/css/custom.css" />
					</head>

					<body>
					    <div className="container">
					        <div id="app">
					        	{this.props.innerContent}
					        </div>
					    </div>
					    <footer className="footer">
					      <div className="container">
					        <p className="text-muted">Нижавто. Услуги автовозов и эвакуаторов</p>
					      </div>
					    </footer>
					    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
					    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'></script>
					    <script src='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.20/jquery.fancybox.min.js'></script>
					    <script src='/public.js'></script>
					</body>

					</html>
				)
	}
}

const innerContent = ReactDOMServer.renderToString(<App />);
export let html = ReactDOMServer.renderToString(<Html innerContent={<App />} />);


