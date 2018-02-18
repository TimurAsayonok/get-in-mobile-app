import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Content } from 'native-base';

import { Forms } from 'components/tools';
import { scale } from 'utils/scale';
import { AppTitleStyle, APP_TITLE, TextStyle } from 'constants/UIStyles'
import AuthComponentForm from './AuthComponentForm';

import Styles from './styles';


class AuthComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginDetails: {
        email: null,
        password: null
      }
    };
  }

  render() {
    const { login, signUp, errorMessage } = this.props;
    const { loginDetails } = this.state;
    
    return (
      <Content contentContainerStyle={Styles.content}>
        <View style={Styles.imageContainer}>
          <ResponsiveImage
            source={require('images/bath.png')}
            initWidth={scale(110)}
            initHeight={scale(80)}
            style={Styles.image}
          />
          <Text style={AppTitleStyle}>{APP_TITLE}</Text>
        </View>
        <View style={Styles.container}>
          <AuthComponentForm
            onSubmit={values => this.setState({ loginDetails: values })}
            initialValues={loginDetails}
          />
          {errorMessage && <Forms.ErrorMessageForm message={errorMessage} />}
          <TouchableOpacity
            onPress={() => login(loginDetails)}
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
            <Text style={[TextStyle.callout, {color: '#FFF'}]}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}

AuthComponent.propTypes = {
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default AuthComponent;
