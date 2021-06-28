// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, makeLargeImg }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem makeLargeImg={makeLargeImg} images={images} />
    </ul>
  );
};

export default ImageGallery;
