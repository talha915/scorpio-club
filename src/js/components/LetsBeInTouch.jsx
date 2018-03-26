// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class LetsBeInTouch extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="lets-be-in-touch">
        <div className="wrapper">
          <h3 className="lets-be-in-touch-heading">Lets be in Touch</h3>
          <h4 className="lets-be-in-touch-subheading">Society excited by cottage private an it esteems. Fully begin on by wound an. Girl rich in do up or both. At declared in as rejoiced of together.</h4>
          <form action="">
            <input type="email" name="email" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

LetsBeInTouch.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(LetsBeInTouch);