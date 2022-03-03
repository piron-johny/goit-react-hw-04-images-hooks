import { StyledModal } from './Modal.styled';
import { createPortal } from 'react-dom';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { Component } from 'react';

const modalRoot = document.getElementById('root-modal');

class Modal extends Component {
  onCloseModalEscape = e => {
    if (e.keyCode === 27) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalEscape);
  }

  render() {
    const { isModal, onCloseModal, largeImg } = this.props;

    return createPortal(
      <StyledModal className={isModal && 'active'}>
        <div>
          <img src={largeImg} alt="Large imag" />
        </div>
        {isModal && (
          <button type="button" onClick={onCloseModal}>
            <IoCloseCircleSharp className="closeBtn" />
          </button>
        )}
      </StyledModal>,
      modalRoot
    );
  }
}

export default Modal;
