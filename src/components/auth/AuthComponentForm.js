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
}

class AuthComponentForm extends Component {

  render() {
    const { submit } = this.props;
    return (
      <View>
        <Field
          name="email"
          placeholder="Email"
          component={CustomTextInput}
          props={{
            onBlur: submit
          }}
        />

        <Field
          name="password"
          placeholder="Password"
          component={CustomTextInput}
          secureTextEntry
          props={{
            onBlur: submit
          }}
          containerStyle={Styles.marginTopButton}
        />
      </View>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Field is required';
  }

  if (!values.password || values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  return errors;
};

AuthComponentForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default reduxForm({ form: 'loginForm', validate })(AuthComponentForm);