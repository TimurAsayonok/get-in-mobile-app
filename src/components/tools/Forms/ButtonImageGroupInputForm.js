import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Button } from 'components/tools';
import { LOCATION_BUTTONS, LOCATION_BUTTONS_TYPES } from 'constants/commons';

const ButtonImageGroupInput = ({ input: { onChange, value }, onPress }) => {

  return (
    <Button.CustomImageButtonGroup
      onPress={(selectedIndex) => {
        onChange(LOCATION_BUTTONS_TYPES[selectedIndex]);
        setTimeout(onPress);
      }}
      selectedIndex={LOCATION_BUTTONS_TYPES.indexOf(value)}
      buttons={LOCATION_BUTTONS}
    />
  )
}

ButtonImageGroupInput.propTypes = {
  input: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ButtonImageGroupInput;
