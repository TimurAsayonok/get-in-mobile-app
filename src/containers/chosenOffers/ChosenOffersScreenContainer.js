import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { chosenSelector } from 'selectors';
import { List, Title } from 'components/tools';

import { NAVIGATION_STYLES_MAIN } from 'constants/UIStyles';
import { CHOSEN_SCREEN_TITLE } from 'constants/texts';

import Styles from './styles';

class ChosenOffersScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { chosenOffers } = this.props;
    
    return (
      <ScrollView contentContainerStyle={Styles.content}>
        <Title title={CHOSEN_SCREEN_TITLE} />
        {chosenOffers && chosenOffers.map(offer => (
          <List.OfferListItem key={offer._id} offer={offer} />
        ))}
        {_.isEmpty(chosenOffers) &&
          <Title>List is empty</Title>
        }
      </ScrollView>
    );
  }

}

ChosenOffersScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  chosenOffers: PropTypes.array.isRequired
};

ChosenOffersScreenContainer.navigatorStyle = { ...NAVIGATION_STYLES_MAIN };

export default connect(chosenSelector, dispatch => ({ dispatch }))(ChosenOffersScreenContainer);