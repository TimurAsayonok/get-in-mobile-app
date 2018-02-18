import { StyleSheet } from 'react-native';

import { scale, verticalScale, moderateScale } from 'utils/scale';

const Styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    flex: 1
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
  },
  imageError: {
    height: scale(20),
    width: scale(20)
  },
  container: {
    paddingHorizontal: verticalScale(40)
  },
  errorContainer: {
    marginTop: verticalScale(5),
    flexDirection: 'row'
  },
  input: {
    fontSize: moderateScale(17),
    borderRadius: scale(10),
    borderWidth: 2,
    borderColor: '#333',
    color: '#333',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10)
  },
  inputError: {
    borderColor: '#FF3333',
    borderWidth: 2,
    color: '#FF3333',
  },
  textError: {
    color: '#FFF',
    fontSize: moderateScale(15),
    marginLeft: scale(5)
  },
  signUpButtonContainer: {
    marginTop: verticalScale(30),
    padding: scale(10),
    borderRadius: scale(28.5),
    backgroundColor: '#5AC8FA'
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