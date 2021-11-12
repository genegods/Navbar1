import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'


function App() {
  return (
    <React.Fragment >
     
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/contact' component={ContactUs}/>
        </Switch>
      </Router>
      
    </React.Fragment>
     
       
  
  );
}

export default App;
