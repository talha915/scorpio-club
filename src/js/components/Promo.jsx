// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Promo extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="promo">
        <div className="wrapper">
          <h3 className="promo-heading">The Problem Solver...</h3>
          <div className="promo-content-container">
            <div className="promo-image-container">
              <div className="promo-image">
              </div>
            </div>
            <div className="promo-text-container">
              <p className="promo-text">In a fix or deep trouble? As a Scorpio for help! Yes, Scorpio have an  uncanny ability to work out solutions from scratch.</p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </section>
    );
  }
}

Promo.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(Promo);