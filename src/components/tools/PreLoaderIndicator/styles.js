import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    zIndex: 1,
    backgroundColor: 'rgba(65,66,78, 0.75)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    height: 80,
    marginLeft: 10
  }
});

export default Styles;
