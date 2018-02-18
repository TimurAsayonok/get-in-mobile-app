import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
} from 'react-native';
import { Content } from 'native-base';

import { Title } from 'components/tools';
import { REMIND_PASSWORD_SCREEN_TITLE } from 'constants/texts';
import RemindPasswordComponentForm from './RemindPasswordComponentForm';


import Styles from './styles';


class RemindPasswordComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { remindPassword, errorMessage } = this.props;
    const { loginDetails } = this.state;

    return (
      <Content contentContainerStyle={Styles.container}>
        <Title title={REMIND_PASSWORD_SCREEN_TITLE} />
        <RemindPasswordComponentForm
          onSubmit={values => remindPassword(values)}
          initialValues={loginDetails}
          errorMessage={errorMessage}
        />
      </Content>
    );
  }
}

RemindPasswordComponent.propTypes = {
  remindPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default RemindPasswordComponent;
