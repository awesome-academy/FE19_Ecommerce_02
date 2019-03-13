import React, { Component } from 'react';
import './css/style.css';
import Header from './components/header/Header';
//import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Promotion from './components/promotion/Promotion';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header />
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/products' component={Products}/>
              <Route path='/promotion' component={Promotion}/>
              <Route path='/services' component={Services}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
