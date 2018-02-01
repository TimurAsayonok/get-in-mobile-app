import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch, Text } from 'react-native';

import { TextStyle } from 'constants/UIStyles.js';

import Styles from './styles';

const SwitchInputForm = ({ input, title, onPress, ...inputProps }) => (
  <View style={Styles.inputView}>
    <View style={Styles.titleView}>
      <Text style={TextStyle.headLine}>{title}</Text>
    </View>
    <View style={Styles.switchView}>
      <Switch
        {...inputProps}
        onValueChange={(value) =>  {
          input.onChange(value);
          setTimeout(onPress);
        }}
        value={input.value.toString()}
      />
    </View>
  </View>
);

SwitchInputForm.propTypes = {
  input: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

SwitchInputForm.defaultProps = {
};

export default SwitchInputForm;
