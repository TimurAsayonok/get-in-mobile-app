import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Rating } from 'react-native-elements';

import { TextStyle } from 'constants/UIStyles';
import { ListItemStyles as Styles } from './styles';
import { verticalScale } from 'utils/scale';

const OfferListItem = (props) => {
  const { offer } = props;
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => props.onOpen && props.onOpen(offer)}
    >
      <Image
        style={{ height: 140 }}
        source={{ uri: offer.photo }}
        resizeMode="cover"
        borderTopLeftRadius={5}
        borderBottomRightRadius={5}
      />
      <View style={Styles.content}>
        <View style={Styles.offerHeader}>
          <Text style={TextStyle.headLine}>{offer.name}</Text>
        </View>
        <View style={Styles.body}>
          <Rating
            type="star"
            startingValue={offer.rating}
            readonly
            imageSize={15}
            onFinishRating={this.ratingCompleted}
            style={{ marginTop: verticalScale(5) }}
          />
          <Text style={[TextStyle.body, { fontWeight: 'bold', marginTop: verticalScale(5) }]}>{offer.price} zł/month</Text>
          <Text
            numberOfLines={8}
            style={[TextStyle.callout, { marginTop: verticalScale(5) }]}
          >
            {offer.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

OfferListItem.propTypes = {
  offer: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired
};

export default OfferListItem;
