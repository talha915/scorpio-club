import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import { shape, string } from 'prop-types';
// import Data from '../../data/Data.js';

export default class Gallery extends Component {
  fromOurScorpiosRender() {
    const { fromOurScorpiosData } = this.props;
    return (
      fromOurScorpiosData.map((image, k) => {
        const postImg = fromOurScorpiosData[k].postImg;
        return (
          <div
            //key={Math.random()}
            key={k}
            className="from-our-scorpios-gallery"
          >
            <img
              src={postImg}
              className="from-our-scorpios-gallery-item"
              alt="from our scorpios gallery item"
            />
          </div>
        );
      })
    );
  }

  someNotableScorpiosRender() {
    const { someNotableScorpiosData } = this.props;
    return (
      someNotableScorpiosData.map((image, k) => {
        const postImg = someNotableScorpiosData[k].postImg;
        return (
          <div
            key={k}
            //key={k.Math.random()}
            className="some-notable-scorpios-gallery"
          >
            <img
              src={postImg}
              className="some-notable-scorpios-gallery-item"
              alt="some notable scorpios gallery item"
            />
          </div>
        );
      })
    );
  }

  /* content() {
     const { sectionTitle } = this.props;
     if (sectionTitle === 'From Our Scorpios'){
       return this.fromOurScorpiosRender()
     }
     else if (sectionTitle === 'Some Notable Scorpios'){
       return this.someNotableScorpiosRender()
     } 
   } */

  render() {
    const { sectionTitle } = this.props;

    return (
      <div id="gallery">
        {
          sectionTitle === 'From Our Scorpios' && this.fromOurScorpiosRender()
          ||
          sectionTitle === 'Some Notable Scorpios' && this.someNotableScorpiosRender()
          // sectionTitle
          // this.content()
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  sectionTitle: string.isRequired,
  fromOurScorpiosData: shape({
    postImg: string.isRequired,
  }).isRequired,
  someNotableScorpiosData: shape({
    postImg: string.isRequired,
  }).isRequired,
} ;
