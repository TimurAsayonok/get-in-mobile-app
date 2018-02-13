import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-native';

import { offersActions } from 'actions';
import { searchOffersSelector } from 'selectors';

import SearchComponent from 'components/search/SearchComponent';
import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';
import { SEARCH_SCREEN_TITLE } from 'constants/texts';

class SearchOffersScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offersStatus.error && !nextProps.offersStatus.isFetching) {
      Alert.alert(
        'Message',
        `${nextProps.offersStatus.error}`,
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    return (
      <SearchComponent
        screenTitle={SEARCH_SCREEN_TITLE}
        navigator={this.props.navigator}
        dispatch={this.props.dispatch}
        onButtomPress={this.onSubmit}
        isFetching={this.props.offersStatus.isFetching}
      />
    );
  }

  onSubmit(values) {
    const { dispatch } = this.props;

    dispatch(offersActions.findOffers(values));
  }
}

SearchOffersScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  offersStatus: PropTypes.object.isRequired
};

SearchOffersScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(searchOffersSelector, dispatch => ({ dispatch }))(SearchOffersScreenContainer);