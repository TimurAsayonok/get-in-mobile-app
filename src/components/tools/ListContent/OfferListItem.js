import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Rating } from 'react-native-elements';

import { TextStyle } from 'constants/UIStyles';
import { ListItemStyles as Styles } from './styles';
import { scale, verticalScale } from 'utils/scale';
import _ from 'lodash';

const OfferListItem = (props) => {
  const { offer } = props;
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => props.onOpen(offer)}  
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
};

export default OfferListItem