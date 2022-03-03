import { StyledImageGallery, Image, GalleryItem } from './ImageList.styled';

const ImageList = ({ images, onOpenModal }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <GalleryItem key={id} id={id}>
          <Image
            src={webformatURL}
            alt={tags}
            onClick={onOpenModal}
            data-source={largeImageURL}
          />
        </GalleryItem>
      ))}
    </StyledImageGallery>
  );
};

export default ImageList;
