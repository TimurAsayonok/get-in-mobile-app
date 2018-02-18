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
import { TextStyle } from 'constants/UIStyles';

import Styles from './styles';


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
      {!meta.valid && meta.touched ? <Forms.ErrorMessageForm message={meta.error} /> : null}
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
  const { submit, errorMessage, signUp } = props;
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
      {errorMessage && <Forms.ErrorMessageForm message={errorMessage} />}
      <TouchableOpacity
        onPress={submit}
        style={Styles.buttonContainer}
      >
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={signUp}
        style={Styles.signUpButtonContainer}
      >
        <Text style={[Styles.buttonText, { color: '#FFF' }]}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.forgotPasswordContainer}>
        <Text style={[TextStyle.callout, { color: '#FFF' }]}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}

AuthComponentForm.propTypes = {
  submit: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default reduxForm({ form: 'loginForm' })(AuthComponentForm);