import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Button } from 'components/tools';

const ButtonGroupInput = ({ input: { onChange, value }, onPress, buttons, buttonsType }) => (
  <View style={{ marginTop: 10 }}>
    <Button.CustomButtonGroup
      onPress={(selectedIndex) => {
        onChange(buttonsType[selectedIndex]);
        setTimeout(onPress);
      }}
      selectedIndex={buttonsType.indexOf(value)}
      buttons={buttons}
    />
  </View>
);

ButtonGroupInput.propTypes = {
  input: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ButtonGroupInput;
