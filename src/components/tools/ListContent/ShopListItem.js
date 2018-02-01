import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import _ from 'lodash';

import ProductListItem from './ProductListItem';

import { scale } from 'utils/scale';
import { TextStyle } from 'constants/UIStyles';
import { ShopListItemStyles as Styles } from './styles';

export default class ShopListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenBox: props.openBox
    };
  }
  
  render() {
    const { shop, lines, style, onPress } = this.props;
    const { isOpenBox } = this.state;
    return (
      <View key={shop.id} style={Styles.shopContainer} style={style}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => { this.setState({ isOpenBox: !isOpenBox }) }}
          style={Styles.header}
        >
          <View style={Styles.headerLeft}>
            <ResponsiveImage
              source={shop.img}
              initWidth={scale(80)}
              initHeight={scale(45)}
              style={Styles.image}
            />
            <View style={Styles.shopText}>
              <Text style={TextStyle.title4} numberOfLines={1}>{_.capitalize(shop.name)}</Text>
              <Text style={TextStyle.subHead} numberOfLines={1}>{shop.address}</Text>
            </View>
          </View>
          <View style={Styles.headerRight}>
            <ResponsiveImage
              source={isOpenBox ? require('images/6AGreyBottom.png') : require('images/6AGreyLeft.png')}
              initWidth={isOpenBox ? scale(17) : scale(10)}
              initHeight={isOpenBox ? scale(10) : scale(17)}
              style={[isOpenBox ? Styles.imageCrayBottom : Styles.imageCrayLeft]}
            />
          </View>
        </TouchableOpacity>
        {isOpenBox &&
          <View style={Styles.body}>
            {
              lines
                ? lines.map((line) => line.shop_id === shop.id && <ProductListItem key={line.id} product={line} onPress={onPress}/> )
                : this.props.contentComponent
            }
          </View>
        }
      </View>
    );
  }
}

ShopListItem.propTypes = {
  shop: PropTypes.object.isRequired,
  lines: PropTypes.array,
  contentComponent: PropTypes.element,
  openBox: PropTypes.bool,
  onPress: PropTypes.func
};

ShopListItem.defaultProps = {
  onPress: () => { },
  lines: null
};
