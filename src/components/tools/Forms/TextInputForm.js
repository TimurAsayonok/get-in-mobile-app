import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';

import { TextStyle } from 'constants/UIStyles.js';

import Styles from './styles';

const TextInputForm = ({ input, title, isNumeric, lineValue, ...inputProps }) => (
  <View style={Styles.inputView}>
    <View style={Styles.titleView}>
      <Text style={TextStyle.headLine}>{title}:</Text>
    </View>
    <View style={Styles.valueView}>
      <View style={{ flex: 1 }}>
        <TextInput
          {...inputProps}
          placeholderTextColor="#d4d4d4"
          underlineColorAndroid="transparent"
          keyboardType={isNumeric ? 'numeric' : 'default'}
          style={[TextStyle.body2, Styles.valueInput]}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value.toString()}
        />
      </View>
      {lineValue && <Text style={TextStyle.body2}> / {lineValue}</Text>}
    </View>
  </View>
);

TextInputForm.propTypes = {
  input: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isNumeric: PropTypes.bool,
  lineValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

TextInputForm.defaultProps = {
  isNumeric: false,
  lineValue: null
};

export default TextInputForm;