import { Header } from './SearchBar.styled';
import Form from '../Form';

const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit} />
    </Header>
  );
};

export default SearchBar;
