import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddGroceryItemForm from './AddGroceryItemForm';

const handleAdd = jest.fn();

test('initial input should be empty', () => {
  render(<AddGroceryItemForm onAdd={handleAdd} />);
  const groceryInputElement = screen.getByRole('textbox');
  expect(groceryInputElement).toHaveValue('');
});

test('placeholder has description to add item', () => {
  render(<AddGroceryItemForm onAdd={handleAdd} />);
  const groceryInputElement = screen.getByPlaceholderText(/add/i);
  expect(groceryInputElement).toBeInTheDocument();
});

test('should be able to type in item', async () => {
  const user = userEvent.setup();
  render(<AddGroceryItemForm onAdd={handleAdd} />);
  const groceryInputElement = screen.getByRole('textbox');
  await user.type(groceryInputElement, 'milk');
  expect(groceryInputElement).toHaveValue('milk');
});

test('button should be disabled on empty input', () => {
  render(<AddGroceryItemForm onAdd={handleAdd} />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeDisabled();
});

// testing item added when submit form will be tested in Grocery component (integration testing)
test('input reset to empty when submit form', async () => {
  const user = userEvent.setup();
  render(<AddGroceryItemForm onAdd={handleAdd} />);
  const buttonElement = screen.getByRole('button');
  const groceryInputElement = screen.getByRole('textbox');
  await user.type(groceryInputElement, 'milk');
  await userEvent.click(buttonElement);
  expect(groceryInputElement).toHaveValue('');
});
