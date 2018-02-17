import React, { Component } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import ResponsiveImage from 'react-native-responsive-image';
import { Rating } from 'react-native-elements';

import { Button } from 'components/tools';
import { GET_IN_BUTTON, ADDED_BUTTON } from 'constants/commons';
import { scale } from 'utils/scale';
import { userActions } from 'actions';
import { offerSelector } from 'selectors';


import { MODAL_NAVIGATION_STYLES, TextStyle } from 'constants/UIStyles';

import Styles from './styles';

class OfferScreenContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.closeModal = this.closeModal.bind(this);
    this.chooseOffer = this.chooseOffer.bind(this);
  }

  render() {
    const { offer, chosenOffers } = this.props;
    const disableButton = !!_.find(chosenOffers, item => item._id === offer._id);
    const button = disableButton ? ADDED_BUTTON : GET_IN_BUTTON;

    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#5AC8FA'
      }}
      >
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={Styles.header}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={[TextStyle.headLine, { color: '#888888' }]}>{_.upperFirst(offer.type)}</Text>
              </View>
              <TouchableOpacity onPress={this.closeModal}>
                <ResponsiveImage
                  source={require('images/close.png')}
                  initWidth={scale(22)}
                  initHeight={scale(22)}
                />
              </TouchableOpacity>

            </View>
            <Text style={TextStyle.title4}>{offer.location.city}, {offer.location.street}</Text>
            <Text style={TextStyle.title4}>{offer.name}</Text>
          </View>
          <View style={Styles.body}>
            <Image
              style={{ height: 250 }}
              source={{ uri: offer.photo }}
              resizeMode="cover"
            />
            <View style={Styles.content}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Rating
                  type="star"
                  startingValue={offer.rating}
                  readonly
                  imageSize={20}
                />
              </View>
              <Text
                style={[
                  TextStyle.body, {
                    fontWeight: 'bold',
                    marginTop: 10
                  }
                ]}
              >
                {offer.price} zł/month
              </Text>
              <Text
                style={[TextStyle.callout, { marginTop: 10 }]}
              >
                {offer.description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Button.CustomButton
          button={button}
          disabled={disableButton}
          onPress={() => this.chooseOffer(offer._id)}
        />
      </SafeAreaView>
    );
  }

  closeModal() {
    const { navigator } = this.props;

    navigator.dismissModal({
      animationType: 'slide-down'
    });
  }

  chooseOffer(offerId) {
    const { dispatch, userId } = this.props;

    dispatch(userActions.chooseOffer({
      userId,
      offerId
    }));
  }
}

OfferScreenContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  offer: PropTypes.object.isRequired,
};

OfferScreenContainer.navigatorStyle = { ...MODAL_NAVIGATION_STYLES };

export default connect(offerSelector, dispatch => ({ dispatch }))(OfferScreenContainer);