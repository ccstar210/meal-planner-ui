import { CloseIcon } from '@chakra-ui/icons';
import {
  Checkbox,
  HStack,
  List,
  ListIcon,
  ListItem,
  Spacer,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function GroceryList({ groceryList, onCheck, onDelete }) {
  const listItems = groceryList.map((grocery) => (
    <ListItem p="1em" bg="white" key={grocery.id}>
      <HStack>
        <Checkbox
          colorScheme="orange"
          defaultChecked={grocery.checked}
          onChange={() => {
            onCheck(grocery.id);
          }}
        >
          {grocery.item}
        </Checkbox>
        <Spacer />
        <ListIcon
          as={CloseIcon}
          role="img"
          cursor="pointer"
          onClick={onDelete}
        />
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
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
