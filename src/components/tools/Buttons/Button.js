import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity
} from 'react-native';

import { ButtonComponentStyles as Styles } from './styles';
import { TextStyle } from 'constants/UIStyles';

class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, style, titleStyle, backgroundColor, titleColor, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[Styles.button, style, { backgroundColor, borderColor: backgroundColor }]}
      >
        <Text style={[Styles.buttonTitle, titleStyle, { color: titleColor }]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  titleStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
};

Button.defaultProps = {
  backgroundColor: '#000',
  titleColor: '#FFF',
  onPress: () => {}
}

export default Button;
