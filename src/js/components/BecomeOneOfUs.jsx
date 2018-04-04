import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import App from './App.jsx';

const BecomeOneOfUs = (props) => {
  const data = props.becomeoneofusKey;
  return (
    <section id="become-one-of-us">
      <div className="wrapper">
        <h3 className="become-one-of-us-heading">{data.sectionHeading}</h3>
        <h4 className="become-one-of-us-subheading">{data.sectionH3}</h4>
        <button className="become-one-of-us-button">Contact Us</button>
        <div className="filler" />
      </div>
    </section>
  );
};

/* BecomeOneOfUs.propTypes = {
} */

/* function mapStateToProps(state) {
  return {
    key: null
  };
}; */

export default connect(null, {})(BecomeOneOfUs);
