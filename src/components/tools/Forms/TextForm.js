import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TextStyle } from 'constants/UIStyles.js';

import Styles from './styles';


const TextForm = ({ title, input, value }) => (
  <View style={Styles.inputView}>
    <View style={Styles.titleView}>
      <Text style={TextStyle.headLine}>{title}:</Text>
    </View>
    <View style={Styles.valueTextView}>
      <Text style={TextStyle.body2}>{value ? value : input.value}</Text>
    </View>
  </View>
);

TextForm.propTypes = {
  input: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default TextForm;
