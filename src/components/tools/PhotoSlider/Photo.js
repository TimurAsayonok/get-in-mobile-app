import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { scale, verticalScale, moderateScale } from 'utils/scale';

// import { getPhotoPath } from 'utils/utils';

import Styles, { ITEM_WIDTH } from './styles';

const CreatePhotoItem = ({ onPress, noPhotos, styles }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={onPress}
  >
    <View style={[Styles.createSlideInnerContainer, noPhotos && { marginLeft: 0 }, styles]}>
      <Image
        // source={require('images/CameraWhite.png')}
        initWidth={scale(50)}
        initHeight={scale(37)}
        style={{ width: scale(50), height: scale(37) }}
      />
    </View>
  </TouchableOpacity>
)

class Photo extends Component {

  render() {
    const { item, onRemove, itemWidth, itemHeight } = this.props;
    const extraImageStyle = onRemove ? { height: itemHeight, width: itemWidth } : {};
    const extraImageContainerStyle = onRemove ? { height: itemHeight, width: itemWidth + 10} : {};

    const remoteImage = (typeof item.path === 'string' ? item.path && { uri: getPhotoPath(item.path) } : item.path);
    const localImage = { uri: item.uri };

    if (item.isAddItem) return (
      <CreatePhotoItem
        onPress={item.onCreate}
        noPhotos={item.noPhotos}
        styles={[extraImageStyle]}
      />
    )
    console.log(this.props)
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View style={[extraImageContainerStyle]}>
          <Image
            source={remoteImage || localImage}
            style={[extraImageStyle]}
          />
          {onRemove && (
            <TouchableOpacity activeOpacity={0.5} style={[Styles.removePhoto, { width: itemWidth }]} onPress={() => onRemove(item)}>
              <Text style={Styles.removePhotoText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

Photo.propTypes = {
  itemWidth: PropTypes.number,
  item: PropTypes.object,
};

Photo.defaultProps = {
  itemWidth: ITEM_WIDTH,
  item: {},
};

export default Photo;
