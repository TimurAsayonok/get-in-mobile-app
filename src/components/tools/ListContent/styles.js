import { StyleSheet, Dimensions } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';
import { TextColors, TITLE_COLOR } from 'constants/UIStyles';

const { width } = Dimensions.get('window');

const ListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
    borderRadius: 5,
    borderColor: '#BFBFBF',
    borderWidth: 1,
  },
  content: {
    margin: scale(5)
  },
  left: {
    flex: 1
  },
  offerHeader: {
    flexDirection: 'row'
  }
});

const InfoListItemStyles = StyleSheet.create({
  listItemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#dfdfdf'
  },
  listInfoItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: verticalScale(5),
    marginTop: verticalScale(10)
  },
  titleView: {
    flex: 0.4,
    justifyContent: 'center'
  },
  valueTextView: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const ListDataItemStyles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dfdfdf',
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(5)
  },
  itemText: {
    marginLeft: scale(5)
  }
});


export { ListItemStyles, InfoListItemStyles, ListDataItemStyles };