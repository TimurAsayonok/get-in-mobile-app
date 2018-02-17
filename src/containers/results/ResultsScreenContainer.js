import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import { resultsSelector } from 'selectors';
import { List, Title } from 'components/tools';

import { NAVIGATION_STYLES } from 'constants/UIStyles';
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
        <Title title={RESULTS_SCREEN_TITLE} />
        {offers && offers.map(offer => (
          <List.OfferListItem key={offer._id} offer={offer} onOpen={this.openOffer}/>
        ))}

      </ScrollView>
    );
  }

  openOffer(offer) {
    const { navigator } = this.props;

    console.log(offer);

    navigator.showModal({
      screen: "OfferScreen",
      passProps: {
        offer
      },
      animationType: 'slide-up'
    })
  }
}

ResultsScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired
};

ResultsScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES };

export default connect(resultsSelector, dispatch => ({ dispatch }))(ResultsScreenContainer);