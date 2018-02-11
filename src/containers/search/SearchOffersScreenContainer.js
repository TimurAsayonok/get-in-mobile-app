import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { authActions } from 'actions';
import { authSelector } from 'selectors';

import SearchComponent from 'components/search/SearchComponent';
import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';
import { SEARCH_SCREEN_TITLE } from 'constants/texts';

class SearchOffersScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <SearchComponent
        screenTitle={SEARCH_SCREEN_TITLE}
      />
    );
  }

}

SearchOffersScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
};

SearchOffersScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(authSelector, dispatch => ({ dispatch }))(SearchOffersScreenContainer);