import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Button } from 'components/tools';
import { LINE_TYPES, LINE_TYPE_BUTTONS } from 'constants/commons';

const ButtonGroupInput = ({ input: { onChange, value }, onPress }) => (
  <View style={{ marginTop: 10 }}>
    <Button.CustomButtonGroup
      onPress={(selectedIndex) => {
        onChange(LINE_TYPES[selectedIndex]);
        setTimeout(onPress);
      }}
      selectedIndex={LINE_TYPES.indexOf(value)}
      buttons={LINE_TYPE_BUTTONS}
    />
  </View>
);

ButtonGroupInput.propTypes = {
  input: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ButtonGroupInput;
