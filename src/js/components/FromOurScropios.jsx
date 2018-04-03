// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import App from './App.jsx';
import Gallery from './Gallery.jsx';
import Data from '../../data/Data.js';

class FromOurScorpios extends Component {

  constructor() {
    super();
  }

  render() {
    const data= this.props.fromscorpioKey;
    return (
      <section id="from-our-scorpios">
        <div className="wrapper">
          <h3 className="from-our-scorpios-heading">{data.sectionHeading}</h3>
          <h4 className="from-our-scorpios-subheading">{data.sectionH3}</h4>
          <div className="from-our-scorpios-collection-container">
            <div className="from-our-scorpios-collection-row">
            <Gallery
              sectionTitle={data.sectionTitle}
              fromOurScorpiosData={data.fromOurScorpiosData}
            />   
            </div>
            
            <button className="from-our-scorpios-button">See More</button>
            <div className="filler"></div>
          </div>
        </div>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(FromOurScorpios);
