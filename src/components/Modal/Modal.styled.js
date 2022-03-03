import styled from '@emotion/styled';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  opacity: 0;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: auto;
  }
  & div {
    position: relative;
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 100px);
  }
  & img {
    display: block;
    width: 100%;
  }
  & button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .closeBtn {
    font-size: 40px;
    color: #fff;
    transition: color 200ms linear;
    &:hover {
      color: #ddd;
    }
  }
`;
