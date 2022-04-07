import { useState } from 'react';
import { Button, Input, Span, StyledForm } from './Form.styled';

const Form = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <StyledForm onSubmit={onHandleSubmit}>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <Button type="submit">
        <Span>Search</Span>
      </Button>
    </StyledForm>
  );
}

export default Form;
