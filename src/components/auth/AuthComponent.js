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
import AuthComponentForm from './AuthComponentForm'

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
    const { login, authStatus } = this.props;
    const { loginDetails } = this.state;
    
    return (
      <Content contentContainerStyle={Styles.content}>
        <View style={Styles.imageContainer}>
          {/* <ResponsiveImage
            source={require('images/Logoszopipl.png')}
            initWidth={scale(180)}
            initHeight={scale(120)}
            style={Styles.image}
          /> */}
        </View>
        <View style={Styles.container}>
          <AuthComponentForm
            onSubmit={values => this.setState({ loginDetails: values })}
            initialValues={loginDetails}
          />
          
          <TouchableOpacity
            onPress={() => login(loginDetails)}
            style={Styles.buttonContainer}
          >
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {authStatus.error.non_field_errors && <Forms.ErrorMessageForm message={authStatus.error.non_field_errors} />}
        </View>
      </Content>
    );
  }
}

AuthComponent.propTypes = {
  login: PropTypes.func.isRequired,
  authStatus: PropTypes.object.isRequired
};

export default AuthComponent;
