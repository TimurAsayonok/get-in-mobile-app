import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';
import { SCREEN_WIDTH } from 'constants/UIStyles';

const Styles = StyleSheet.create({
  nameInputView: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: verticalScale(5),
    marginTop: verticalScale(10)
  },
  inputView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: verticalScale(5),
    marginTop: verticalScale(10)
  },
  titleView: {
    flex: 0.7,
    justifyContent: 'center'
  },
  valueView: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  switchView: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  valueInput: {
    flex: 1,
    marginLeft: scale(5)
  },
  valueTextView: {
    flex: 0.3,
    alignItems: 'flex-end'
  },
  button: {
    flex: 0
  },
  errorContainer: {
    marginTop: verticalScale(5),
    flexDirection: 'row'
  },
  textError: {
    color: '#FFF',
    fontSize: moderateScale(15),
    marginLeft: scale(5)
  },
  imageError: {
    height: scale(20),
    width: scale(20)
  }
});

export default Styles;