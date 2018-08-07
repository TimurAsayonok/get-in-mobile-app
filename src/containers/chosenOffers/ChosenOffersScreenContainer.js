import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { chosenSelector } from 'selectors';
import { List, Title } from 'components/tools';

import { NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE, MODAL_STYLES} from 'constants/UIStyles';


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
        {chosenOffers && chosenOffers.map(offer => (
          <List.OfferListItem
            key={offer._id}
            offer={offer}
            onOpen={this.openOffer}
          />
        ))}
        {_.isEmpty(chosenOffers) &&
          <Title>List is empty</Title>
        }
      </ScrollView>
    );
  }

  static get options() {
    return { ...NAVIGATION_STYLES_MAIN_WITH_LARG_TITLE };
  }

  openOffer = (offer) => {
    const { navigator, componentId } = this.props;

    navigator.showModal({
      component: {
        name: 'screens.OfferScreen',
        id: `${componentId}_Modal`,
        passProps: {
          offer
        },
        options: {
          ...MODAL_STYLES
        }
      }
    });
  }
}

ChosenOffersScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  chosenOffers: PropTypes.array.isRequired
};

export default connect(chosenSelector, dispatch => ({ dispatch }))(ChosenOffersScreenContainer);