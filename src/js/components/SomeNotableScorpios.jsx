// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class SomeNotableScorpios extends Component {

  constructor() {
    super();
  }

  render() {
    const data= this.props.someNotableKey;
    return (
      <section id="some-notable-scorpios">
        <div className="wrapper">
          <h3 className="some-notable-scorpios-heading">{data.heading}</h3>
          <h4 className="some-notable-scorpios-subheading">{data.subheading}</h4>
          <div className="some-notable-scorpios-collection-container">
            <div className="some-notable-scorpios-collection-row">
              <img className="some-notable-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="some-notable-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="some-notable-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="some-notable-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="some-notable-scorpios-collection-image" src="./images/Bill Gates.jpg" />
              <img className="some-notable-scorpios-collection-image" src="./images/Bill Gates.jpg" />

            </div>
            <button className="some-notable-scorpios-button">See More</button>
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