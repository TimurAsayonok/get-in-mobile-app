import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    flex: 1
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    height: scale(120),
    width: scale(180)
  },
  imageError: {
    height: scale(20),
    width: scale(20)
  },
  container: {
    marginTop: verticalScale(40),
    paddingHorizontal: verticalScale(40)
  },
  errorContainer: {
    marginTop: verticalScale(5),
    flexDirection: 'row'
  },
  input: {
    fontSize: moderateScale(17),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10)
  },
  inputError: {
    borderColor: '#FF3333',
    backgroundColor: '#FFEBEE',
    borderWidth: 2,
    color: '#FF3333',
  },
  textError: {
    color: '#FFF',
    fontSize: moderateScale(15),
    marginLeft: scale(5)
  },
  buttonContainer: {
    backgroundColor: '#fff',
    marginTop: verticalScale(30),
    padding: scale(10),
    borderRadius: scale(28.5),
  },
  buttonText: {
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  marginTopButton: {
    marginTop: verticalScale(15)
  }
});

export default Styles;