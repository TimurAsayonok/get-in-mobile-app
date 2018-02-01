import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity
} from 'react-native';

import { ButtonComponentStyles as Styles } from './styles';
import { LINE_ACTIONS_BUTTONS } from 'constants/commons';
import Button from './Button';

class ModalViewButton extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { type, onPress, style } = this.props;
    return (
      <Button
        title={LINE_ACTIONS_BUTTONS[type].title}
        backgroundColor='white'
        titleColor={LINE_ACTIONS_BUTTONS[type].color}
        onPress={onPress}
        style={style}
      />
    );
  }
}

ModalViewButton.propTypes = {
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ModalViewButton;
