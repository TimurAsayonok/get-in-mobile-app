import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';

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
    console.log(this.props);
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
      screen: "OfferScreen", // unique ID registered with Navigation.registerScreen
      passProps: {
        offer
      }, // simple serializable object that will pass as props to the modal (optional)
      // navigatorStyle: {
      //   statusBarHidden: true
      // }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
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