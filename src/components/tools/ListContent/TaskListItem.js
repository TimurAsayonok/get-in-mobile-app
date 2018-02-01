import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity } from 'react-native';

import { TextStyle } from 'constants/UIStyles';
import { STATUS_BUTTON } from 'constants/commons';

import { TaskListItemStyles as Styles } from './styles';
import { CustomButton } from '../Buttons/index';

export default class TaskListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { onPress, changeTaskStatus, item } = this.props;
    const { id, customer: { name, address }, delivery_time, payment, zone, status } = item;
    /** affter conection api to app, create list for Text */
    return (
      <View key={id} style={Styles.container}>
        <TouchableOpacity style={Styles.containerInfo} onPress={() => onPress(item)}>
          <View style={Styles.titleContainer}>
            <Text style={TextStyle.title4}>{`Task ${id}`}</Text>
          </View>
          <Text style={TextStyle.body}>{`Customer: ${name}`}</Text>
          <Text style={TextStyle.body}>{`Delivery: ${delivery_time}`}</Text>
          <Text style={TextStyle.body}>{`Address: ${address}`}</Text>
          <Text style={TextStyle.body}>{`Payment: ${payment}`}</Text>
          <Text style={TextStyle.body}>{`Zone: ${zone}`}</Text>
        </TouchableOpacity>
        <CustomButton buttons={STATUS_BUTTON} status={status} onPress={() => changeTaskStatus(item)} />
      </View>
    );
  }
}

TaskListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  changeTaskStatus: PropTypes.func
};

TaskListItem.defaultProps = {
  onPress: () => { },
  changeTaskStatus: () => { },
};
