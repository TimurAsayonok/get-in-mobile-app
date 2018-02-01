import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View, BackAndroid } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modalbox';
import _ from 'lodash';

import { Button } from 'components/tools';
import Styles from './style.js';

export default class ModalView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen } = this.props;

    if (nextProps.isOpen) {
      this.setState({ isOpen: true });
      BackAndroid.addEventListener('hardwareBackPress', () => { this.props.onClose(); return true; });
    }
    else if (!nextProps.isOpen && isOpen !== nextProps.isOpen) {
      this.setState({ isOpen: false })
      BackAndroid.addEventListener('hardwareBackPress', () => {
      });
    }
  }

  render() {
    const { onClose, buttons } = this.props;

    return (
      <Modal
        isOpen={this.state.isOpen}
        onClosed={() => {
          onClose();
          this.setState({ isOpen: false });
        }}
        style={Styles.modalContainer}
        position="bottom"
        ref="modal4"
        coverScreen
      >
        {buttons && buttons.map((button, index) => {
          return (
            <Button.ModalViewButton
              key={index}
              type={button.type}
              style={Styles.button}
              onPress={() => { button.onPress(); onClose(); }}
            />
          )})
        }
        <Button.ModalViewButton
          style={Styles.cancelButton}
          key="cancel"
          type="cancel"
          onPress={onClose}
        />
      </Modal>
    );
  }
}

ModalView.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  buttons: PropTypes.array
};

ModalView.defaultProps = {
  isOpen: false,
  buttons: []
};
