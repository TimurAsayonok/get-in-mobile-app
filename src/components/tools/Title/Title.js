import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View
} from 'react-native';

import { TitleComponentStyles as Styles } from './styles';
import { TextStyle } from 'constants/UIStyles';


class Title extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, style, containerStyle } = this.props;

    return (
      <View style={[Styles.titleContainer, containerStyle]}>
        <Text style={[Styles.titleText, TextStyle.title1, style]}>{title}</Text>
      </View>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  containerStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
};

export default Title;
