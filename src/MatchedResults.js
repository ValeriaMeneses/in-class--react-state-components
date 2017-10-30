import React, { Component } from 'react';

class MatchedResults extends Component {
  render() {
    const styles = {
      position: 'fixed',
      top: '0',
      right: '0',
      backgroundColor: 'yellow',
      color: 'red',
      fontSize: '65px'
    }

    return <p style={styles}>{this.props.number}</p>;
  }
}

export default MatchedResults;
