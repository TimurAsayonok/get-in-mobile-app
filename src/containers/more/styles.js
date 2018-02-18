import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(15)
  },
  header: {
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  body: {
    marginTop: verticalScale(20)
  }
});

export default Styles;