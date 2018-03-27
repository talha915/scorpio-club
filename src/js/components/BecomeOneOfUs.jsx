// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import App from './App.jsx';
// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class BecomeOneOfUs extends Component {

  constructor() {
    super();
  }

  render() {
    let data= this.props.becomeoneofusKey;
    return (
      <section id="become-one-of-us">
        <div className="wrapper">
          <h3 className="become-one-of-us-heading">{data.heading}</h3>
          <h4 className="become-one-of-us-subheading">{data.message}</h4>
          <button className="become-one-of-us-button">Contact Us</button>
        </div>
      </section>
    );
  }
}

BecomeOneOfUs.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(BecomeOneOfUs);