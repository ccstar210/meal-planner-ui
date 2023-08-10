import { Container, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import GroceryList from '../components/grocery/GroceryList';
import AddGroceryItemForm from '../components/grocery/AddGroceryItemForm';

export default function Grocery() {
  const [groceryList, setGroceryList] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/groceryItems')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGroceryList(data);
      });
  }, []);

  const handleAdd = (groceryItem) => {
    alert(groceryItem);
  };

  const handleCheck = (id) => {
    const updatedList = groceryList.map((grocery) => {
      if (grocery.id === id) return { ...grocery, checked: !grocery.checked };
      return grocery;
    });
    setGroceryList(updatedList);
  };
  const handleDelete = () => {
    alert('deleted');
  };

  return (
    <Container textAlign="center" maxW="container.lg">
      <Heading color="orange.500">Grocery List</Heading>
      <AddGroceryItemForm onAdd={handleAdd} />
      {!groceryList && 'No items'}
      {groceryList && (
        <GroceryList
          groceryList={groceryList}
          onCheck={handleCheck}
          onDelete={handleDelete}
        />
      )}
    </Container>
  );
}
