import { render, screen } from '@testing-library/react';
import GroceryList from './GroceryList';

const groceryList = [
  {
    id: 0,
    item: 'milk',
    checked: false,
  },
  {
    id: 1,
    item: 'eggs',
    checked: true,
  },
  {
    id: 2,
    item: 'cauliflower',
    checked: false,
  },
  {
    id: 3,
    item: 'lettuce',
    checked: false,
  },
];

const handleCheck = jest.fn();
const handleDelete = jest.fn();

test('displays the list of grocery items', () => {
  render(
    <GroceryList
      groceryList={groceryList}
      onCheck={handleCheck}
      onDelete={handleDelete}
    />,
  );

  const listItemElements = screen.getAllByRole('listitem');
  expect(listItemElements).toHaveLength(4);
  expect(listItemElements[0]).toHaveTextContent(groceryList[0].item);
});

test('displays the checkbox for each grocery item', () => {
  render(
    <GroceryList
      groceryList={groceryList}
      onCheck={handleCheck}
      onDelete={handleDelete}
    />,
  );
  const checkBoxElements = screen.getAllByRole('checkbox');
  expect(checkBoxElements).toHaveLength(4);
});

test('displays the correct initial checkbox value for each grocery item', () => {
  render(
    <GroceryList
      groceryList={groceryList}
      onCheck={handleCheck}
      onDelete={handleDelete}
    />,
  );
  const checkBoxElements = screen.getAllByRole('checkbox');
  expect(checkBoxElements[0]).not.toBeChecked();
  expect(checkBoxElements[1]).toBeChecked();
});

test('displays the remove icon for each grocery item', () => {
  render(
    <GroceryList
      groceryList={groceryList}
      onCheck={handleCheck}
      onDelete={handleDelete}
    />,
  );
  const listItemElements = screen.getAllByRole('img');
  expect(listItemElements).toHaveLength(4);
});
