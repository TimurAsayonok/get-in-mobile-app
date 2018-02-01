import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import { TextStyle } from 'constants/UIStyles.js';

import Styles from './styles';

const InputForm = ({ input, isNumeric, editable, ...inputProps }) => (
  <View style={Styles.nameInputView}>
    <TextInput
      {...inputProps}
      placeholderTextColor="#d4d4d4"
      underlineColorAndroid="transparent"
      keyboardType={isNumeric ? 'numeric' : 'default'}
      style={TextStyle.headLine}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value.toString()}
      editable={editable}
    />
  </View>
);

InputForm.propTypes = {
  input: PropTypes.object.isRequired,
  editable: PropTypes.bool,
  isNumeric: PropTypes.bool,
};

InputForm.defaultProps = {
  editable: true,
  isNumeric: false
};

export default InputForm;