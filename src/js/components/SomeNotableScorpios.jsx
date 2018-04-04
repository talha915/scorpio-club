// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Gallery from './Gallery';

const SomeNotableScorpios = (props) => {
  const { someNotableKey } = props;
  return (
    <section id="some-notable-scorpios">
      <div className="wrapper">
        <h3 className="some-notable-scorpios-heading">{someNotableKey.sectionHeading}</h3>
        <h4 className="some-notable-scorpios-subheading">{someNotableKey.sectionH3}</h4>
        <div className="some-notable-scorpios-collection-container">
          <div className="some-notable-scorpios-collection-row">
            <Gallery
              sectionTitle={someNotableKey.sectionTitle}
              someNotableScorpiosData={someNotableKey.someNotableScorpiosData}
            />
          </div>
          <button className="some-notable-scorpios-button">See More</button>
          <div className="filler" />
        </div>
      </div>
    </section>
  );
};

SomeNotableScorpios.propTypes = {
  someNotableKey: shape({
    sectionHeading: string.isRequired,
    sectionH3: string.isRequired,
    sectionTitle: string.isRequired,
  }).isRequired,
};

/* function mapStateToProps() {
  return {
    state: null,
  };
} */

export default connect(null, {})(SomeNotableScorpios);
