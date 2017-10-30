import React, { Component } from 'react';

class List extends Component {
  render() {
    const items = this.props.items;
    let itemsFiltered;

    if (items.length > 0) {
      itemsFiltered = items.map(item => <li>{item}</li>)
    } else {
      itemsFiltered = <p>No items.</p>
    }

    return (
      <ul>
        {itemsFiltered}
      </ul>
    )
  }
}

export default List;
