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
import { AppTitleStyle, APP_TITLE } from 'constants/UIStyles';
import AuthComponentForm from './AuthComponentForm';

import Styles from './styles';


class AuthComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { login, signUp, errorMessage, remindPassword } = this.props;
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
            onSubmit={values => login(values)}
            initialValues={loginDetails}
            errorMessage={errorMessage}
            remindPassword={remindPassword}
            signUp={signUp}
          />
        </View>
      </Content>
    );
  }
}

AuthComponent.propTypes = {
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  remindPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default AuthComponent;
