import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { offersActions } from 'actions';
import { resultsSelector } from 'selectors';

import { NAVIGATION_STYLES } from 'constants/UIStyles';
import { SEARCH_SCREEN_TITLE } from 'constants/texts';

class ResultsScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>dfgsdf</Text>
      </View>
    );
  }
}

ResultsScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

ResultsScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES };

export default connect(resultsSelector, dispatch => ({ dispatch }))(ResultsScreenContainer);