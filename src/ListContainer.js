import React, { Component } from 'react';

import Filter from './Filter';
import List from './List';
import MatchedResults from './MatchedResults';

class ListContainer extends Component {
  constructor() {
    super();

    this.state = {
      listItems: [
        "Chicago",
        "New York",
        "Tokyo",
        "London",
        "San Francisco",
        "Amsterdan",
        "Hong Kong"
      ],
      nameFilter: ''
    }
  }

  _updateParentStateFromFilter = (filter) => {
    this.setState({
      nameFilter: filter
    })
  }

  render() {
    const NOT_FOUND = -1;

    let displayedItems = this.state.listItems.filter(item => {
      return item.toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) !== NOT_FOUND;
    });

    return (
      <div>
        <Filter updateState={this._updateParentStateFromFilter}/>
        <List items={displayedItems} />
        <MatchedResults number={displayedItems.length} />
      </div>
    )
  }
}

export default ListContainer;
