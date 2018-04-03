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
    const data= this.props.letsbeintouchKey;
    return (
      <section id="lets-be-in-touch">
        <div className="wrapper">
          <h3 className="lets-be-in-touch-heading">{data.sectionHeading}</h3>
          <h4 className="lets-be-in-touch-subheading">{data.sectionH3}</h4>
          <form action="" className="form form-inline" >
            <div className="form" >
              <label className="sr-only" htmlFor="email">Email:</label>
              <input type="text" className="form-control inputheight" id="email" placeholder="Enter Name"  name="email" size="20"/>
              &nbsp;&nbsp;
              <input type="email" className="form-control inputheight" id="email" placeholder="Enter email"  name="email" size="20"/>
              
            </div>
            <button className="form-button">Subscribe</button>
            <div className="filler"></div>
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