import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
						<Link to='/'><img src="../images/logo.png" className='header-logo' alt=""/></Link>
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

ReactDOM.render(<App />, document.getElementById('app'));