import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import { nanoid } from 'nanoid';

import { SearchBox, Filter } from './SearchFilter.styled';
import { Box, Input } from '@chakra-ui/react';

export const SearchFilterStyled = () => {
  const idInputSearch = nanoid();
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box marginBottom={16}>
      <label htmlFor={idInputSearch}>Enter contact's name</label>
      <Input
        variant="filled"
        placeholder="Filled"
        onChange={onFilterChange}
        id={idInputSearch}
        type="text"
        name="searchValue"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Box>
  );
};
