import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text
} from 'react-native';
import { reduxForm, Field } from 'redux-form';
import ResponsiveImage from 'react-native-responsive-image';
import { scale } from 'utils/scale';


import Styles from './styles';

const errorMessage = (message) => {
  return (
    <View style={Styles.errorContainer}>
      <ResponsiveImage
        source={require('images/icn-error.png')}
        initWidth={scale(20)}
        initHeight={scale(20)}
        style={Styles.imageError}
      />
      <Text style={Styles.textError}>{message}</Text>
    </View>
  );
};

const CustomTextInput = ({ input, meta, containerStyle, ...inputProps }) => {
  return (
    <View style={containerStyle}>
      <TextInput
        {...inputProps}
        placeholderTextColor={!meta.valid && meta.touched ? '#E53935' : '#fff'}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={[Styles.input, !meta.valid && meta.touched ? Styles.inputError : null]}
        onChangeText={input.onChange}
        onBlur={inputProps.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {!meta.valid && meta.touched ? errorMessage(meta.error) : null}
    </View>
  );
};

CustomTextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  containerStyle: PropTypes.number
};

CustomTextInput.defaultProps = {
  containerStyle: null
};

const required = value => (value ? undefined : 'Field is required');

const AuthComponentForm = (props) => {
  const { submit } = props;
  return (
    <View>
      <Field
        name="email"
        placeholder="Email"
        component={CustomTextInput}
        validate={[required]}
      />

      <Field
        name="password"
        placeholder="Password"
        component={CustomTextInput}
        secureTextEntry
        containerStyle={Styles.marginTopButton}
        validate={[required]}
      />
    </View>
  );
}

AuthComponentForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'loginForm' })(AuthComponentForm);