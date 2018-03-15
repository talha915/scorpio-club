import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        Hello Taimoor
        <div className="container">
          Hello to you as well.
        </div>
      </div>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  return {
    testReducer: state.testReducer
  };
};

export default connect(mapStateToProps, {})(App);