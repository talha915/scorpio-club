// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {Button} from 'reactstrap';
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
          <h4 className="lets-be-in-touch-subheading">Society excited by cottage private an it esteems. Fully begin on by wound an.<br></br> Girl rich in do up or both. At declared in as rejoiced of together.</h4>
          <form action="" className="form" class="form-inline">
            <div class="form-group" className="form">
              <label class="sr-only" for="email">Email:</label>
              <input type="email" class="form-control" className="inputheight" id="email" placeholder="Enter email"  name="email" size="40"/>
              &nbsp;&nbsp;
              <button className="form-button">Subscribe</button>
            </div>
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