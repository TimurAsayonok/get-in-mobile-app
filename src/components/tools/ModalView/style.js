import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  modalContainer: {
    height: null,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingBottom: verticalScale(15),
    paddingHorizontal: scale(15)
  },
  button: {
    marginTop: verticalScale(5)
  },
  cancelButton: {
    marginTop: verticalScale(10),
  }
});

export default Styles;
