import { useState } from 'react';
import Button from '../Button';
import ImageList from '../ImageList';
import Loader from '../Loader';
import Modal from '../Modal';

const ImageGallery = ({ images, onLoadMore, loader }) => {
  const [largeImg, setLargeImg] = useState('');
  const [isModal, setIsModal] = useState(false);

  const onOpenModal = e => {
    const { source } = e.target.dataset;
    setLargeImg(source);
    setIsModal(true)
  };

  const onCloseModal = () => {
    setLargeImg('');
    setIsModal(false)
  };

  if (!!images.length) {
    return (
      <>
        <Modal
          isModal={isModal}
          onCloseModal={onCloseModal}
          largeImg={largeImg}
        />

        <ImageList images={images} onOpenModal={onOpenModal} />

        {loader ? <Loader /> : <Button onLoadMore={onLoadMore} />}
      </>
    );
  }

  return null;
}

export default ImageGallery;

