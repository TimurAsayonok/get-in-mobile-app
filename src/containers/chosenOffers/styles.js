import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  content: {
    paddingHorizontal: scale(15),
    paddingBottom: verticalScale(15)
  },
});

export default Styles;