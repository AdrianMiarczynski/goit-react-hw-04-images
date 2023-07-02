import ImagesGalleryItem from '../Imagegaleryitem/imagegaleryitem';
import css from './imagegallery.module.css';
import PropTypes from 'prop-types';

const ImagesGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        const { id, webformatURL, tags, largeImageURL } = image;
        return (
          <ImagesGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
export default ImagesGallery;

ImagesGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
