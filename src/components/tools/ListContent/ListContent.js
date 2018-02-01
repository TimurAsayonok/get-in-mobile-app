import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Reactotron from 'reactotron-react-native';

export default class ListContent extends Component {
  render() {
    const { Item, styles, items } = this.props;
    return (
      <FlatList
        lazy
        style={[styles, { flex: 1 }]}
        data={items}
        removeClippedSubviews={false}
        onEndReachedThreshold={0.5}
        initialNumToRender={5}
        refreshControl={this.props.refreshControl}
        renderItem={({ item, index }) =>
          <Item item={item} index={index}/>
        }
      />
    );
  }
}

ListContent.propTypes = {
  Item: PropTypes.any,
  items: PropTypes.array,
  enterInItem: PropTypes.func,
  styles: PropTypes.object,
  refreshControl: PropTypes.func,
};

ListContent.defaultProps = {
  items: [],
  enterInItem: () => { },
  refreshControl: null,
};
