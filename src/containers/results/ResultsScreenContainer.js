import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import { resultsSelector } from 'selectors';
import { List, Title } from 'components/tools';

import { NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE } from 'constants/UIStyles';
import { RESULTS_SCREEN_TITLE } from 'constants/texts';

import Styles from './styles';

class ResultsScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.openOffer = this.openOffer.bind(this);
  }

  render() {
    const { offers } = this.props;

    return (
      <ScrollView contentContainerStyle={Styles.content}>
        {offers && offers.map(offer => (
          <List.OfferListItem key={offer._id} offer={offer} onOpen={this.openOffer}/>
        ))}

      </ScrollView>
    );
  }

  openOffer(offer) {
    const { navigator } = this.props;

    navigator.showModal({
      component: {
        name: 'screens.OfferScreen',
        passProps: {
          offer
        }
      }
    });
  }

  static get options() {
    return {
      ...NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE
    };
  }
}

ResultsScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired
};

export default connect(resultsSelector, dispatch => ({ dispatch }))(ResultsScreenContainer);