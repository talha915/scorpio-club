// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import App from './App.jsx';
// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class FromOurScorpios extends Component {

  constructor() {
    super();
  }

  render() {
    const data= this.props.fromscorpioKey;
    return (
      <section id="from-our-scorpios">
        <div className="wrapper">
          <h3 className="from-our-scorpios-heading">{data.heading}</h3>
          <h4 className="from-our-scorpios-subheading">{data.subheading}</h4>
          <div className="from-our-scorpios-collection-container">
            <div className="from-our-scorpios-collection-row">
              <img className="from-our-scorpios-collection-image" src="./images/Bill Gates.jpg" />  
              <img className="from-our-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="from-our-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="from-our-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="from-our-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="from-our-scorpios-collection-image" src="./images/Bill Gates.jpg" />
            </div>
            
            <button className="from-our-scorpios-button">See More</button>
          </div>
        </div>
      </section>
    );
  }
}

FromOurScorpios.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(FromOurScorpios);

/*
<div className="from-our-scorpios-collection-row">
              <img className="" src="./images/giphy.gif" />
              <img className="" src="./images/giphy.gif" />
              <img className="" src="./images/giphy.gif" />
              <img className="" src="./images/giphy.gif" />
            </div>
            */