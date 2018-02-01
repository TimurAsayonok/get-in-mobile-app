import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';
import { TextColors, TITLE_COLOR } from 'constants/UIStyles';

const TaskListItemStyles = StyleSheet.create({
  container: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.7,
    elevation: 2,
    marginBottom: verticalScale(15)
  },
  containerInfo: {
    flex: 1,
    borderColor: '#F7F7F7',
    borderWidth: 1,
    backgroundColor: "#ffffff",
    paddingTop: verticalScale(5),
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(15)
  },
  titleContainer: {
    marginBottom: verticalScale(3)
  },
  titleText: {}
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

const ShopListItemStyles = StyleSheet.create({
  shopContainer: {
    paddingBottom: verticalScale(2),
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 1,
    marginLeft: scale(10),
    marginRight: scale(10),
    marginVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerRight: {
    marginRight: scale(10),
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  shopText: {
    marginLeft: verticalScale(5)
  },
  image: {
    width: scale(80),
    height: scale(45)
  },
  imageCrayLeft: {
    width: scale(10),
    height: scale(17)
  },
  imageCrayBottom: {
    width: scale(17),
    height: scale(10)
  },
  body: {}
});

const ProductListItemStyles = StyleSheet.create({
  bodyItemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(3),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#dfdfdf'
  },
  itemImageContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
  },
  borderLeft: {
    borderLeftWidth: 4
  },
  productImage: {
    width: scale(80),
    height: scale(45)
  },
  productTextContainer: {
    marginLeft: verticalScale(5)
  }
});

export { TaskListItemStyles, InfoListItemStyles, ShopListItemStyles, ProductListItemStyles };