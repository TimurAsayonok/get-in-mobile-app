import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
} from 'react-native';
import { Content } from 'native-base';

import { Title } from 'components/tools';
import { SIGN_UP_SCREEN_TITLE } from 'constants/texts';
import SignUpComponentForm from './SignUpComponentForm';


import Styles from './styles';


class SignUpComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { signUp, errorMessage } = this.props;
    const { loginDetails } = this.state;

    return (
      <Content contentContainerStyle={Styles.container}>
        <Title title={SIGN_UP_SCREEN_TITLE} />
        <SignUpComponentForm
          onSubmit={values => signUp(values)}
          initialValues={loginDetails}
          errorMessage={errorMessage}
        />
      </Content>
    );
  }
}

SignUpComponent.propTypes = {
  signUp: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default SignUpComponent;
