// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Data from '../../data/Data.js'
// ########## Import Containers Here ##########
import App from './App';
// ########## Import Components Here ##########

class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    const data= this.props.footerKey;
    return (
      <section id="footer">
        <div className="wrapper">
          <div className="footer-container-left">
            <p className="footer-heading">{data.sectionHeading}</p><br></br><br></br>
            <p className="footer-disclaimerleft">{data.sectionPara}</p>
          </div>
          <div className="footer-container-right">
            <p className="footer-heading"></p>
            <div className="footer-disclaimer"><br></br><br></br><br></br>
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