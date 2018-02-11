import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { ButtonInageGroupStyles as Styles } from './styles';


const CustomImageButtonGroup = ({ selectedIndex, buttons, onPress }) => (
  <View style={Styles.container}>
    {
      buttons && buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[Styles.buttonContainer, selectedIndex === index ? Styles.buttonContainerSelected : Styles.buttonContainerColor]}
          onPress={() => onPress(index)}
        >
          <ResponsiveImage
            source={selectedIndex === index ? button.selectedImage : button.image}
            initWidth={button.width}
            initHeight={button.height}
          />
          <Text style={[selectedIndex === index ? Styles.selectedTextStyle : Styles.textStyle]}>{button.title}</Text>
        </TouchableOpacity>
      ))
    }
  </View>
);

CustomImageButtonGroup.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  buttons: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomImageButtonGroup;