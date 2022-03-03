import { StyledButton } from './Button.styled';

const Button = ({ onLoadMore }) => {
  return (
    <StyledButton onClick={onLoadMore} type="button">
      Load more
    </StyledButton>
  );
};

export default Button;
