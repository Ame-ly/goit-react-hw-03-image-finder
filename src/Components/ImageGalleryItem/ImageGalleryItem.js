// import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ makeLargeImg, images }) =>

  images.map(({ id, webformatURL, largeImageURL, tags }) => (

    <li key={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem__image}
        src={webformatURL}
        alt={tags}
        onClick={() => makeLargeImg(largeImageURL,tags)}
      />
    </li>
  ));

ImageGalleryItem.propTypes = {
  makeLargeImg: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGalleryItem;
