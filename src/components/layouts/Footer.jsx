import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box textAlign="center" bg="orange.500" color="white" p="24px">
      <NavLink to="/">MealPlansForYou</NavLink>
      <Text>&copy; 2023</Text>
    </Box>
  );
}
