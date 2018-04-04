import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = (props) => {
  const data = props.footerKey;
  return (
    <section id="footer">
      <div className="wrapper">
        <div className="footer-container-left">
          <p className="footer-heading">{data.sectionHeading}</p><br /><br />
          <p className="footer-disclaimerleft">{data.sectionPara}</p>
        </div>
        <div className="footer-container-right">
          <p className="footer-heading" />
          <div className="footer-disclaimer"><br /><br /><br />
            <a href="#" target="_blank"><i className="fab fa-facebook fa-2x" /></a>
            <a href="#" target="_blank"><i className="fab fa-twitter-square fa-2x" /></a>
            <a href="#" target="_blank"><i className="fab fa-instagram fa-2x" /></a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </section>
  );
};

/* Footer.propTypes = {
} */

/* function mapStateToProps(state) {
  return {
    key: null
  };
}; */

export default connect(null, {})(Footer);
