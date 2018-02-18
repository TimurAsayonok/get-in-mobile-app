import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { scale } from 'utils/scale';
import Styles from './styles';

const errorMessage = ({ message, errorColor }) => (
  <View style={Styles.errorContainer}>
    <ResponsiveImage
      source={require('images/icn-error.png')}
      initWidth={scale(20)}
      initHeight={scale(20)}
      style={Styles.imageError}
    />
    <Text style={[Styles.textError, { color: errorColor }]}>{message}</Text>
  </View>
);

errorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  errorColor: PropTypes.string
};

errorMessage.defaultProps = {
  errorColor: '#FFF'
}

export default errorMessage;