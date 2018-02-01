import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import { TextStyle } from 'constants/UIStyles';
import { Forms } from 'components/tools';
import { InfoListItemStyles as Styles } from './styles';
import _ from 'lodash';

export default class InfoListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { infoKey, index, info } = this.props;
    return (
      <View key={index} style={Styles.listInfoItem}>
        <View style={Styles.titleView}>
          <Text style={TextStyle.headLine}>{_.capitalize(infoKey)}:</Text>
        </View>
        <View style={Styles.valueTextView}>
          <Text
            style={[TextStyle.body2, { textAlign: 'right' }]}
            numberOfLines={2}
          >
            {info[infoKey]}
          </Text>
        </View>
      </View>
    );
  }
}

InfoListItem.propTypes = {
  infoKey: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
};
