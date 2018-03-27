// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="footer">
        <div className="wrapper">
          <div className="footer-container-left">
            <p className="footer-heading">Scorpio<br></br> Club</p>
            <p className="footer-disclaimerleft">© 2018 Scorpio Club | All rights reserved.</p>
          </div>
          <div className="footer-container-right">
            <p className="footer-heading"></p>
            <div className="footer-disclaimer">
              <a href="#" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" target="_blank"><i className="fab fa-twitter-square fa-2x"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </section>
    );
  }
}

Footer.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(Footer);