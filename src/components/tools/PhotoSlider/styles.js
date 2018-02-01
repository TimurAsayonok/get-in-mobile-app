import { StyleSheet, Dimensions } from 'react-native';

const PHOTO_SLIDER_PLACEHOLDER_COLOR = '#41424E';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(83);
const itemHorizontalMargin = wp(5);

export const SLIDER_WIDTH = viewportWidth;
export const ITEM_WIDTH = slideWidth + itemHorizontalMargin * 2;

const Styles = StyleSheet.create({
  content: {
    paddingLeft: 15,
    paddingRight: 15
  },
  carouselContainer: {
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    width: ITEM_WIDTH - 20,
  },
  slideInnerContainer: {
    width: ITEM_WIDTH,
    height: 200,
  },
  createSlideInnerContainer: {
    backgroundColor: PHOTO_SLIDER_PLACEHOLDER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removePhoto: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red'
  },
  removePhotoText: {
    textAlign: 'center',
    paddingVertical: 7,
    fontSize: 17,
    color: '#fff'
  },
  likePhotoIcon: {
    position: 'absolute',
    right: 30,
    bottom: 18,
  },
});

export default Styles;
