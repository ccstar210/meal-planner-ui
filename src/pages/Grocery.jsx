import { Container, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import GroceryList from '../components/grocery/GroceryList';

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
      {groceryList && (
        <GroceryList
          groceryList={groceryList}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </Container>
  );
}
