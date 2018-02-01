import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PhotoSlider, ImagePicker } from 'components/tools';

import _ from 'lodash';

class PhotoSliderInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.removePhoto = this.removePhoto.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }
  render() {
    const { input, ...props } = this.props;
    console.log(this.props);
    return (
      <PhotoSlider
        photos={input.value}
        onRemove={this.removePhoto}
        onCreate={this.selectPhotoTapped}
        itemWidth={this.props.itemWidth}
        itemHeight={this.props.itemHeight}
        {...props}
      />
    );
  }

  removePhoto(photo) {
    const { input: { onChange, value }, onPress } = this.props;
    onChange(_.without(value, photo));
    setTimeout(onPress);
  }

  selectPhotoTapped() {
    const { input: { onChange, value }, onPress } = this.props;

    ImagePicker.pickImage('receipt', (photo) => {
      onChange([...value, ...photo]);
      setTimeout(onPress);
    });
  }
}

PhotoSliderInputForm.propTypes = {
};

PhotoSliderInputForm.defaultProps = {
};

export default PhotoSliderInputForm;
