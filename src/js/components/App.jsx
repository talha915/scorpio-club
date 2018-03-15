import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        Hello Taimoor
      </div>
    );
  }
}

App.PropTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(App);