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

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Hero />
        <Promo />
        <Promo />
        <Promo />
        <Promo />
        <FromOurScropios />
        <SomeNotableScorpios />
        <BecomeOneOfUs />
        <LetsBeInTouch />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  return {
    testReducer: state.testReducer
  };
};

export default connect(mapStateToProps, {})(App);