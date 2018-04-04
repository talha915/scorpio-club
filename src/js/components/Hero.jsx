import React from 'react';
import { connect } from 'react-redux';

const Hero = (props) => {
  const data = props.heroKey;
  return (
    <section id="hero">
      <div className="wrapper">
        <div className="hero-content-container">
          <img className="hero-logo" src="./images/scorpio-club-white.png" alt="" />
          <h1 className="hero-heading">{data.sectionTitle}</h1>
          <h3 className="hero-subheading">{data.sectionH3}</h3>
          <h4 className="hero-text">{data.sectionH4}</h4>
          <button className="hero-button">Let Me In</button>
        </div>
      </div>
    </section>
  );
};


/* function mapStateToProps() {
  return {
    key: null,
  };
} */

export default connect(null, {})(Hero);
