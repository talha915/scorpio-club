import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const LetsBeInTouch = (props) => {
  const data = props.letsbeintouchKey;
  return (
    <section id="lets-be-in-touch">
      <div className="wrapper">
        <h3 className="lets-be-in-touch-heading">{data.sectionHeading}</h3>
        <h4 className="lets-be-in-touch-subheading">{data.sectionH3}</h4>
        <form action="" className="form form-inline">
          <div className="form">
            <input type="text" className="form-control inputheight" id="email" placeholder="Enter Name" name="email" size="20" />
            &nbsp;&nbsp;
            <input type="email" className="form-control inputheight" id="email" placeholder="Enter email" name="email" size="20" />
          </div>
          <button className="form-button">Subscribe</button>
          <div className="filler" />
        </form>
      </div>
    </section>
  );
};


/* function mapStateToProps() {
  return {
    key: null,
  };
} */

export default connect(null, {})(LetsBeInTouch);
