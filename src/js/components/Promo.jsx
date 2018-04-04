import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Promo = () => {
  return (
    <section id="promo">
      <div className="wrapper">
        <h3 className="promo-heading">The Problem Solver...</h3>
        <div className="promo-content-container">
          <div className="promo-image-container">
            <div className="promo-image" />
          </div>
          <div className="promo-text-container">
            <p className="promo-text">In a fix or deep trouble? As a Scorpio for help! Yes, Scorpio have an  uncanny ability to work out solutions from scratch.</p>
          </div>
          <div className="clear" />
        </div>
      </div>
    </section>
  );
};

/* Promo.propTypes = {
} */

/* function mapStateToProps(state) {
  return {
    key: null,
  };
} */

export default connect(null, {})(Promo);
