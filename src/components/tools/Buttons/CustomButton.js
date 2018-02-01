import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity
} from 'react-native';

import { ButtonComponentStyles as Styles } from './styles';
import Button from './Button';

class CustomButton extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { status, onPress, style, buttons, button } = this.props;
    return (
      <Button
        title={button ? button.title : buttons[status].title}
        backgroundColor={button ? button.backgroundColor : buttons[status].backgroundColor}
        titleColor={button ? button.color : buttons[status].color}
        onPress={onPress}
        style={style}
      />
    );
  }
}

CustomButton.propTypes = {
  status: PropTypes.string,
  buttons: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

export default CustomButton;
