import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { listData } from 'actions';
import { listDataSelector } from 'selectors';

import { NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE } from 'constants/UIStyles';
import { List } from 'components/tools';

class ListScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const { dispatch, screenType} = this.props;
    dispatch(listData.getData(screenType));
  }

  render() {
    const { listData, chooseListItem, selectedItemId } = this.props;
    return (
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 15
      }}>
        {
          listData && listData.map(item => (
            <List.ListDataItem
              key={item._id}
              item={item}
              onPress={() => chooseListItem(item)}
              isSelected={item._id === selectedItemId}
            />
          ))
        }
      </ScrollView>
    );
  }

  static get options() {
    return { ...NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE };
  }
}

ListScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  listData: PropTypes.array.isRequired,
  selectedItemId: PropTypes.number,
  chooseListItem: PropTypes.func.isRequired
};

export default connect(listDataSelector, dispatch => ({ dispatch }))(ListScreenContainer);