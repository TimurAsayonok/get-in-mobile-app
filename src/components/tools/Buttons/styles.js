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
    borderColor: '#E1E1E1',
    backgroundColor: 'transparent',
  },
  selectedTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  tabStyle: {
    minHeight: scale(50)
  }
});

const ButtonInageGroupStyles = StyleSheet.create({
  container: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    width: scale(100),
    height: scale(100),
    borderColor: '#e1e1e1',
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: verticalScale(15)
  },
  buttonContainerColor: {
    backgroundColor: '#fff',
  },
  buttonContainerSelected: {
    backgroundColor: '#C3C3C3'
  },
  selectedTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  tabStyle: {
    minHeight: scale(50)
  }
});

export { ButtonComponentStyles, ButtonGroupStyles, ButtonInageGroupStyles };