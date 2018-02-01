import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';
import { BUTTON_GROUP_SELECTED_COLOR, ButtonStyles } from 'constants/UIStyles';

const ButtonComponentStyles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: scale(10),
  },
  buttonTitle: {
    textAlign: 'center',
    ...ButtonStyles
  },
});

const ButtonGroupStyles = StyleSheet.create({
  segmentControllContainer: {
    flex: 1,
    alignSelf: 'center',
    height: 35,
    borderColor: BUTTON_GROUP_SELECTED_COLOR,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  selectedTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  textStyle: {
    fontSize: 15,
    marginTop: 2,
    textAlign: 'center',
    color: BUTTON_GROUP_SELECTED_COLOR,
    borderColor: BUTTON_GROUP_SELECTED_COLOR,
    backgroundColor: 'transparent',
  }
});

export { ButtonComponentStyles, ButtonGroupStyles };