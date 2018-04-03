// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import App from './App.jsx'
class Hero extends Component {

  constructor() {
    super();
  }

  render() {
    const data= this.props.heroKey;
    return (
      <section id="hero">
        <div className="wrapper">
          <div className="hero-content-container">
            <img className="hero-logo" src="./images/scorpio-club-white.png" />
            <h1 className="hero-heading">{data.sectionTitle}</h1>
            <h3 className="hero-subheading">{data.sectionH3}</h3>
            <h4 className="hero-text">{data.sectionH4}</h4>
            <button className="hero-button">Let Me In</button>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(Hero);