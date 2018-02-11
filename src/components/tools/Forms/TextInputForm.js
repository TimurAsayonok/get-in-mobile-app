import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';

import { TextStyle } from 'constants/UIStyles.js';

import Styles from './styles';

const TextInputForm = ({ input, title, ...inputProps }) => (
  <View style={Styles.valueInput}>
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <Text style={TextStyle.headLine}>{title}:</Text>
      <TextInput
        {...inputProps}
        placeholderTextColor="#d4d4d4"
        underlineColorAndroid="transparent"
        keyboardType="numeric"
        style={[TextStyle.body, Styles.valueInput]}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value.toString()}
      />
    </View>
  </View>
);

TextInputForm.propTypes = {
  input: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default TextInputForm;