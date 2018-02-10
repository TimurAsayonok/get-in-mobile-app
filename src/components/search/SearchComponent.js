import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { Forms } from 'components/tools';
import { MainScreenLayout } from 'components/layout';
import { scale } from 'utils/scale';
import { TextStyle } from 'constants/UIStyles'

import Styles from './styles';


class SearchComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchDetails: {
      }
    };
  }

  render() {
    const { screenTitle } = this.props;
    const { searchDetails } = this.state;

    return (
      <MainScreenLayout titleScreen={screenTitle}>
        <View>
          <Text>dfgdfg</Text>
        </View>
      </MainScreenLayout>
    );
  }
}

SearchComponent.propTypes = {
  screenTitle: PropTypes.string.isRequired
};

export default SearchComponent;
