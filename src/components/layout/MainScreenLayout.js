import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Title } from 'components/tools';

import { Styles } from './styles';


class MainScreenLayout extends Component {

  constructor(props) {
    super(props);

    this.stat = {};
  }

  render() {
    const { titleScreen } = this.props;

    return (
      <ScrollView contentContainerStyle={Styles.content}>
        {titleScreen && <Title title={titleScreen} />}
        {this.props.children}
      </ScrollView>
    );
  }
}

MainScreenLayout.propTypes = {
  titleScreen: PropTypes.string.isRequired
};

export default MainScreenLayout;
