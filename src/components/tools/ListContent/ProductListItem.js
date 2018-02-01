import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { scale } from 'utils/scale';
import { TextStyle } from 'constants/UIStyles';
import { LINE_STATUS } from 'constants/commons';
import { ProductListItemStyles as Styles } from './styles';

export default class ProductListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.getMessageForLine = this.getMessageForLine.bind(this);
  }

  render() {
    const { product, onPress } = this.props;
    const message = this.getMessageForLine(product.status, product.substitution);

    return (
      <TouchableOpacity
        onPress={() => onPress(product)}
        key={product.id}
        style={[
          Styles.bodyItemContainer,
          product.status ? Styles.borderLeft : null,
          product.status ? { borderLeftColor: LINE_STATUS[product.status].color } : null
        ]}
      >
        {product.img &&
          <View style={Styles.itemImageContainer}>
            <ResponsiveImage
              source={product.img}
              initWidth={scale(80)}
              initHeight={scale(45)}
              style={Styles.productImage}
            />
          </View>
        }
        {product.name &&
          <View style={Styles.productTextContainer}>
            <Text style={TextStyle.headLineNormal}>{product.qty || product.weight}x{product.name}</Text>
            <Text style={TextStyle.subHead}>{product.type}</Text>
            <Text style={TextStyle.body}>{product.total_price}zł</Text>
            {message && <Text style={{ fontSize: 17, color: LINE_STATUS[product.status].color }}>{message}</Text>}
          </View>
        }
      </TouchableOpacity>
    );
  }

  getMessageForLine(status, substitution) {
    switch (status) {
      case LINE_STATUS.found.title:
        return 'Found';
      case LINE_STATUS.no_product.title:
        return 'Brak produktu';
      case LINE_STATUS.substitute.title:
        return `Substituted by: ${substitution.qty || substitution.weight}x${substitution.name}`;
      default:
        return null;
    }
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  onPress: PropTypes.func
};

ProductListItem.defaultProps = {
  onPress: () => {}
};
