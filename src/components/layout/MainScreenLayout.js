import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from 'native-base';

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
      <Content style={Styles.content}>
        {titleScreen && <Title title={titleScreen} containerStyle={{ marginLeft: 2 }} />}
        {this.props.children}
      </Content>
    );
  }
}

MainScreenLayout.propTypes = {
  titleScreen: PropTypes.string.isRequired
};

export default MainScreenLayout;
