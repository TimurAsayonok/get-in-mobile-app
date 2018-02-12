import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import _ from 'lodash';

import { scale } from 'utils/scale';
import { TextStyle } from 'constants/UIStyles';

import { ListDataItemStyles as Styles } from './styles';

export default class ListDataItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { item, onPress, isSelected } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => { onPress(); }}
        style={Styles.content}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {item.logo &&
            <ResponsiveImage
              source={{ uri: item.logo }}
              initWidth={scale(40)}
              initHeight={scale(40)}
              style={Styles.image}
            />
          }
          <View style={Styles.itemText}>
            <Text style={TextStyle.title4} numberOfLines={1}>{_.capitalize(item.name)}</Text>
            {item && item.location && <Text style={TextStyle.subHead} numberOfLines={2}>{item.location.address}</Text>}
          </View>
        </View>
        {isSelected &&
          <View style={{ justifyContent: 'center', marginRight: 5 }}>
            <ResponsiveImage
              source={require('images/2B.png')}
              initWidth={scale(20)}
              initHeight={scale(20)}
            />
          </View>
        }
      </TouchableOpacity>
    );
  }
}

ListDataItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};
