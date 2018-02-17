import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  header: {
    padding: scale(15),
    backgroundColor: '#FAFCFD',
    flex: 1,
  },
  content: {
    marginVertical: verticalScale(10),
    marginHorizontal: scale(15)
  }
});

export default Styles;