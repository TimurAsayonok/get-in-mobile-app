import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { change } from 'redux-form';
import { View, Text } from 'react-native';
import _ from 'lodash';

import { MainScreenLayout } from 'components/layout';
import { Button, List, Forms, ModalView } from 'components/tools';
import { ADD_CONFIRMATION_BUTTON, FINISHED_BUTTON } from 'constants/commons';
import { TextStyle } from 'constants/UIStyles.js';

import Styles from './styles';


class DeliveryComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: {},
    };

    this.getConfirmationButtons = this.getConfirmationButtons.bind(this);
  }

  render() {
    const { task, submitButton, button } = this.props;
    const { modal } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MainScreenLayout>
          <Forms.TextForm title="Zamowienie" value={task.id} />
          {task.payment === 'terminal' &&
            <View>
              <Forms.TextForm title="Nalezna kwota" value={`${task.cost}zł`} />
              <Forms.TextForm title="W tym kozt dostawy" value="19zł" />
            </View>
          }
          {task.payment !== 'terminal' &&
            <View>
              <Forms.TextForm title="Zwrota dla klientu" value={`${task.cost}zł`} />
              <Text style={[Styles.footNoteText, TextStyle.footNote]}>Kwota zastanic zwrocona w ciagu 2 dni raboczych</Text>
            </View>
          }
          {task.shops && task.shops.map(shop => (
            <List.ShopListItem
              key={shop.id}
              shop={shop}
              style={Styles.shopContainer}
              lines={task.lines}
              onPress={(line) => {
                this.setState({
                  modal: {
                    isOpen: true,
                    buttons: this.getConfirmationButtons(line)
                  }
                });
              }}
              openBox
            />))
          }
        </MainScreenLayout>
        <Button.CustomButton
          style={Styles.button}
          button={button}
          onPress={() => submitButton()}
        />
        <ModalView
          isOpen={modal.isOpen}
          buttons={modal.buttons}
          onClose={() => this.setState({ modal: Object.assign(modal, { isOpen: false }) })}
        />
      </View>
    );
  }

  getConfirmationButtons(line) {
    const {} = this.props;
    /** TODO change type: after connection to server */
    /** type: line.status ? 'accept', 'decline' */
    const buttons = [
      {
        type: 'accept',
        onPress: () => console.log(line.status)
      }
    ];

    return buttons;
  }
}

DeliveryComponent.propTypes = {
  task: PropTypes.object.isRequired,
  submitButton: PropTypes.func.isRequired,
  button: PropTypes.object.isRequired
};

export default DeliveryComponent;
