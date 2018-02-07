import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { authActions } from 'actions';
import { authSelector } from 'selectors';

import AuthComponent from 'components/auth/AuthComponent';
import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';

class FavoritesScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    // this.props.dispatch(authActions.getAreas());
  }

  render() {
    return (
      <View>
        <Text>Favorites</Text>
      </View>
    );
  }

}

FavoritesScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

FavoritesScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(authSelector, dispatch => ({ dispatch }))(FavoritesScreenContainer);