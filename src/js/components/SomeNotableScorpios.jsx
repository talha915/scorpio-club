// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Gallery from './Gallery.jsx';
import Data from '../../data/Data.js';
class SomeNotableScorpios extends Component {

  constructor() {
    super();
  }

  render() {
    const data= this.props.someNotableKey;
    return (
      <section id="some-notable-scorpios">
        <div className="wrapper">
          <h3 className="some-notable-scorpios-heading">{data.sectionHeading}</h3>
          <h4 className="some-notable-scorpios-subheading">{data.sectionH3}</h4>
          <div className="some-notable-scorpios-collection-container">
            <div className="some-notable-scorpios-collection-row">
            <Gallery
              sectionTitle={data.sectionTitle}
              someNotableScorpiosData={data.someNotableScorpiosData}
            /> 
            </div>
            <button className="some-notable-scorpios-button">See More</button>
            <div className="filler"></div>
          </div>
        </div>
      </section>
    );
  }
}

SomeNotableScorpios.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(SomeNotableScorpios);