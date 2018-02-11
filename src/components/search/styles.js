import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(15),
  },
  whatContainer: {
    marginTop: verticalScale(10)
  },
  whereContainer: {
    marginTop: verticalScale(10),
  },
  priceContainer: {
    marginTop: verticalScale(10)
  },
  priceInputs: {
    flexDirection: 'row',
    marginTop: 10,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  roomsContainer: {
    marginTop: verticalScale(10)
  },
  valueInput: {
    flex: 1,
    marginLeft: scale(5)
  }
});

export default Styles;