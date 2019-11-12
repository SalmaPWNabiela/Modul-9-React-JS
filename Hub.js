import React from 'react';
import Utama from './BrowserRouter/utama';
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './BrowserRouter/home'
import User from './BrowserRouter/user'
import Input from './BrowserRouter/input'
import Product from './product'
import AddUser from './AddUser'
import AddProduct from './AddProduct';
import EditUser from './EditUser'
import EditProduct from './EditProduct'
// import { ReactComponent } from '*.svg';
// import { Hub } from '@babel/traverse';

class Hub extends React.Component{
    render(){
        return(
            <Router>
            <div className="container"> 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">React</a>
                <div className="collapse navbar-collapse" 
                id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item">
                            <Link to="/"
                            className="nav-link"> Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link to={'/user'} 
                            className="nav-link"> User</Link>
                    </li>
                    <li className="nav-item">
                            <Link to={'/input'} 
                            className="nav-link"> Input</Link>
                    </li>
                    <li className="nav-item">
                            <Link to={'/product'} 
                            className="nav-link"> Product</Link>
                    </li>
                    </ul>
                    <hr />
                    </div>
            </nav>
            <p><Utama /></p>
        <br />
        <Switch>
                <Route exact path='/home' component={ Home } />
                <Route path='/AddUser' component={ AddUser } />
                <Route path='/AddProduct' component={ AddProduct } />
                <Route path='/editUser/:id' component={ EditUser } />
                <Route path='/editProduct/:product_id' component={ EditProduct } />
        </Switch>
        </div>
        </Router>
        
            // <div>
            //     <hr />
            //     |<Link to="/"> Home</Link> |
            //     <Link to="/user"> User</Link> |
            //     <Link to="/input"> Input</Link> |
            //     <Link to="/product"> Product</Link> |
            //     <hr />
            //     <p><Utama /></p>
            // </div>
        );
    }
}

export default Hub;