import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { scale } from 'utils/scale';

import Photo from './Photo';

import Styles, { SLIDER_WIDTH, ITEM_WIDTH } from './styles';

class PhotoSlider extends Component {

  render() {
    const { onCreate, onRemove, itemWidth, itemHeight } = this.props;

    const photos = [...this.props.photos, { isAddItem: true, onCreate, noPhotos: !!this.props.photos.length }]
    return (
      <View style={Styles.carouselContainer}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={photos}
          sliderWidth={scale(315)}
          itemWidth={scale(itemWidth + 10)}
          itemHeight={scale(itemHeight + 10)}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableMomentum
          activeSlideAlignment={'start'}
          removeClippedSubviews={false}
          renderItem={({ item, index }) => <Photo key={index} item={item} itemWidth={scale(itemWidth)} itemHeight={scale(itemHeight)} onRemove={onRemove} />}
        />
      </View>
    );
  }
}

PhotoSlider.propTypes = {
  photos: PropTypes.array,
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
};

PhotoSlider.defaultProps = {
  photos: [],
  itemWidth: ITEM_WIDTH,
};

export default PhotoSlider;
