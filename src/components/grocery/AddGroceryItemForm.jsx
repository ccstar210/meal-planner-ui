import { AddIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddGroceryItemForm({ onAdd }) {
  const [groceryItem, setGroceryItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(groceryItem);
    setGroceryItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack marginTop={8} px="2em" spacing="0">
        <Input
          variant="outline"
          placeholder="Add an item"
          focusBorderColor="orange.500"
          bg="white"
          value={groceryItem}
          onChange={(e) => setGroceryItem(e.target.value)}
        />
        <IconButton
          colorScheme="orange"
          aria-label="Add grocery item"
          type="submit"
          isDisabled={groceryItem === ''}
          icon={<AddIcon />}
        />
      </HStack>
    </form>
  );
}

AddGroceryItemForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
