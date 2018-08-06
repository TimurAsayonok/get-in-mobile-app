import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-native';

import { offersActions } from 'actions';
import { searchOffersSelector } from 'selectors';

import SearchComponent from 'components/search/SearchComponent';
import { NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE } from 'constants/UIStyles';
import { SEARCH_SCREEN_TITLE } from 'constants/texts';

class SearchOffersScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetching: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { offersStatus, componentId, navigator } = nextProps;
    
    if (offersStatus) {
      if (offersStatus.isFetching) {
        navigator.showOverlay({
          component: {
            name: 'overlay.PreLoaderIndicator',
            id: `${componentId}_PreLoaderIndicator`,
            options: {
              overlay: {
                interceptTouchOutside: true
              }
            }
          }
        });
      } else {
        navigator.dismissOverlay(`${componentId}_PreLoaderIndicator`);
      }
    }

    if (offersStatus.error && !offersStatus.isFetching) {
      Alert.alert(
        'Message',
        `${offersStatus.error}`,
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    }

    if (offersStatus.isFound) {
      this.props.navigator.push(componentId, {
        component: {
          name: 'screens.ResultsScreen',
          options: {
            topBar: {
              title: {
                text: 'Results'
              }
            }
          }
        }
      });
    }
  }

  render() {
    const { navigator, dispatch, componentId } = this.props;

    return (
      <SearchComponent
        screenTitle={SEARCH_SCREEN_TITLE}
        navigator={navigator}
        dispatch={dispatch}
        onButtomPress={this.onSubmit}
        componentId={componentId}
      />

    );
  }

  onSubmit(values) {
    const { dispatch } = this.props;

    dispatch(offersActions.findOffers(values));
  }

  static get options() {
    return {
      ...NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE
    };
  }
}

SearchOffersScreenContainer.propTypes = {
  componentId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  offersStatus: PropTypes.object.isRequired
};

// SearchOffersScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(searchOffersSelector, dispatch => ({ dispatch }))(SearchOffersScreenContainer);