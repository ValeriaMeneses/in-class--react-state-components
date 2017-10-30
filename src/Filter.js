import React, { Component } from 'react';

class Filter extends Component {
  printInConsole = () => {
    const value = this.refs.filterInput.value;

    this.props.updateState(value);
  }

  render() {
    const styles = {
      border: '3px solid red'
    }
    return (
      <input ref="filterInput" onChange={this.printInConsole} style={styles} type="text" />
    )
  }
}

export default Filter;
