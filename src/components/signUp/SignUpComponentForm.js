import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import { reduxForm, Field } from 'redux-form';

import { Forms } from 'components/tools';
import { scale } from 'utils/scale';

import Styles from './styles';

const CustomTextInput = ({ input, meta, containerStyle, ...inputProps }) => {
  return (
    <View style={containerStyle}>
      <TextInput
        {...inputProps}
        placeholderTextColor={!meta.valid && meta.touched ? '#E53935' : '#333'}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={[Styles.input, !meta.valid && meta.touched ? Styles.inputError : null]}
        onChangeText={input.onChange}
        onBlur={inputProps.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {!meta.valid && meta.touched ? <Forms.ErrorMessageForm message={meta.error} errorColor="#E53935" /> : null}
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
}

const required = value => (value ? undefined : 'Field is required');

const SignUpComponentForm = (props) => {
  const { submit, errorMessage } = props;
  return (
    <View style={{ marginTop: scale(10) }}>
      <Field
        name="first_name"
        placeholder="First name"
        component={CustomTextInput}
        validate={[required]}
      />

      <Field
        name="last_name"
        placeholder="Last name"
        component={CustomTextInput}
        containerStyle={Styles.marginTopButton}
        validate={[required]}
      />

      <Field
        name="email"
        placeholder="Email"
        component={CustomTextInput}
        containerStyle={Styles.marginTopButton}
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
      {errorMessage && <Forms.ErrorMessageForm message={errorMessage} errorColor="#E53935" />}
      <TouchableOpacity
        onPress={submit}
        style={Styles.signUpButtonContainer}
      >
        <Text style={[Styles.buttonText, { color: '#FFF' }]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

SignUpComponentForm.propTypes = {
  submit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default reduxForm({ form: 'signUpForm' })(SignUpComponentForm);