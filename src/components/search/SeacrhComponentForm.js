import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import { Button, Forms } from 'components/tools';
import { TextStyle } from 'constants/UIStyles';
import {
  LOCATION_TYPES,
  LOCATION_TYPE_BUTTONS_NAME,
  NUMBER_OF_ROOMS
} from 'constants/commons';
import Styles from './styles';

const SearchFormComponent = (props) => {
  const { submit, getLocation } = props;
  return (
    <View>
      <View style={Styles.whatContainer}>
        <Text style={TextStyle.title4}>What?</Text>
        <Field
          name="type"
          onPress={submit}
          component={Forms.ButtonImageGroupInput}
        />
      </View>
      <View style={Styles.whereContainer}>
        <Text style={TextStyle.title4}>Where?</Text>
        <Field
          name="location"
          onPress={submit}
          component={Forms.ButtonGroupInput}
          buttons={LOCATION_TYPE_BUTTONS_NAME}
          buttonsType={LOCATION_TYPES}
          getLocation={getLocation}
        />
      </View>
      <View style={Styles.priceContainer}>
        <Text style={TextStyle.title4}>Price:</Text>
        <View style={Styles.priceInputs}>
          <Field
            name="from"
            onBlur={submit}
            component={Forms.TextInputForm}
            props={{
              title: 'From'
            }}
          />
          <Field
            name="to"
            onBlur={submit}
            component={Forms.TextInputForm}
            props={{
              title: 'To'
            }}
          />
        </View>
      </View>
      <View style={Styles.roomsContainer}>
        <Text style={TextStyle.title4}>Number of rooms:</Text>
        <Field
          name="room"
          onPress={submit}
          component={Forms.ButtonGroupInput}
          buttons={NUMBER_OF_ROOMS}
          buttonsType={NUMBER_OF_ROOMS}
        />
      </View>
    </View>
  );
};

SearchFormComponent.propTypes = {
  submit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};


export default reduxForm({
  form: 'searchdetails'
})(SearchFormComponent);
