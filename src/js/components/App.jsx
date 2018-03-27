// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Hero from './Hero';
import Promo from './Promo';
import FromOurScropios from './FromOurScropios';
import SomeNotableScorpios from './SomeNotableScorpios';
import BecomeOneOfUs from './BecomeOneOfUs';
import LetsBeInTouch from './LetsBeInTouch';
import Footer from './Footer';
import testReducer from '../actions/index'
class App extends Component {

  constructor() {
    super();
  }

  render() {
    console.log("testReducer",this.props.testReducer);
    let data=this.props.testReducer;
    return (
      
      <div className="app">
        
        <Hero heroKey={data[0]}/>
        <Promo promoKey={data[1]}/>
        <Promo promoKey={data[1]}/>
        <Promo promoKey={data[1]}/>
        <Promo promoKey={data[1]}/>
        <FromOurScropios fromscorpioKey={data[2]}/>
        <SomeNotableScorpios someNotableKey={data[3]}/>
        <BecomeOneOfUs becomeoneofusKey={data[4]}/>
        <LetsBeInTouch letsbeintouchKey={data[5]}/>
        <Footer footerKey={data[6]}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    testReducer: state.testReducer
  };
};

export default connect(mapStateToProps)(App);