import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';
import { TextColors, TITLE_COLOR } from 'constants/UIStyles';

const Styles = StyleSheet.create({
  shopContainer: {
    marginVertical: verticalScale(10),
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    elevation: 2,
    borderColor: '#f4f4f4',
  },
  button: {
    flex: 0
  },
  footNoteText: {
    textAlign: 'center',
    marginTop: verticalScale(10)
  }
});

export default Styles;