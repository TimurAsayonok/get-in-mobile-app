import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Platform, View } from 'react-native';
import Styles from './styles';

const PreLoaderIndicator = props => (
  <View style={[Styles.indicatorContainer]}>
    <ActivityIndicator
      animating
      style={[Styles.indicator]}
      color="white"
      size={Platform.OS === 'android' ? 72 : 'large'}
    />
  </View>
);


PreLoaderIndicator.propTypes = {
  style: PropTypes.object
};

export default PreLoaderIndicator;
