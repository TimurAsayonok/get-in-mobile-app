import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { TextStyle } from 'constants/UIStyles.js';
import { scale, verticalScale } from 'utils/scale';
import { Button } from 'components/tools';

import Styles from './styles';

const ButtonGroupInput = ({ input: { onChange, value }, onPress, buttons, buttonsType, goToListScreen }) => (
  <View style={{ marginTop: 10 }}>
    <Button.CustomButtonGroup
      onPress={(selectedIndex) => {
        goToListScreen && goToListScreen(buttonsType[selectedIndex]);
        onChange(buttonsType[selectedIndex]);
        setTimeout(onPress);
      }}
      selectedIndex={buttonsType.indexOf(value.type ? value.type : value)}
      buttons={buttons}
    />
    {value.name &&
      <View style={Styles.buttonGroupTextContainer}>
        <TouchableOpacity
          onPress={() => goToListScreen(value.type)}
          style={{ flexDirection: 'row' }}
        >
          <View style={{ flex: 1 }}>
            <Text style={TextStyle.headLine} numberOfLines={2}>{value.name}</Text>
          </View>
          <View style={{ justifyContent: 'center', marginRight: 5 }}>
            <ResponsiveImage
              source={require('images/6ARight.png')}
              initWidth={scale(10)}
              initHeight={scale(17)}
            />
          </View>
        </TouchableOpacity>
      </View>
    }
  </View>
);

ButtonGroupInput.propTypes = {
  input: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ButtonGroupInput;
