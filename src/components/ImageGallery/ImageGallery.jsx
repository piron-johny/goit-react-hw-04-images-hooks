import { Component } from 'react';
import Modal from '../Modal';
import ImageList from '../ImageList';
import Loader from '../Loader';
import Button from '../Button';

class ImageGallery extends Component {
  state = {
    largeImg: '',
    isModal: false,
  };

  onOpenModal = e => {
    const { source } = e.target.dataset;
    this.setState({ largeImg: source, isModal: true });
  };

  onCloseModal = () => {
    this.setState({ isModal: false, largeImg: '' });
  };

  // --------------------------------render------------------------

  render() {
    const { isModal, largeImg } = this.state;
    const { images, onLoadMore, loader } = this.props;

    if (!!images.length) {
      return (
        <>
          <Modal
            isModal={isModal}
            onCloseModal={this.onCloseModal}
            largeImg={largeImg}
          />

          <ImageList images={images} onOpenModal={this.onOpenModal} />

          {loader ? <Loader /> : <Button onLoadMore={onLoadMore} />}
        </>
      );
    }

    return null;
  }
}

export default ImageGallery;
