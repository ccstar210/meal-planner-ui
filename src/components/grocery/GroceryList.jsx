import { CloseIcon } from '@chakra-ui/icons';
import {
  HStack,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function GroceryList({
  groceryList,
  handleCheck,
  handleDelete,
}) {
  const listItems = groceryList.map((grocery) => (
    <ListItem p="1em" bg="white" key={grocery.id}>
      <HStack>
        <Text
          cursor="pointer"
          onClick={() => {
            handleCheck(grocery.id);
          }}
          textDecoration={grocery.checked ? 'line-through' : 'none'}
        >
          {grocery.item}
        </Text>
        <Spacer />
        <ListIcon as={CloseIcon} cursor="pointer" onClick={handleDelete} />
      </HStack>
    </ListItem>
  ));

  return (
    <List spacing="1" p="2em" textAlign="left">
      {listItems}
    </List>
  );
}

GroceryList.propTypes = {
  groceryList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      item: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
