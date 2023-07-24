import { CalendarIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Heading, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import NavDrawer from './NavDrawer';

export default function NavBar() {
  return (
    <Flex
      as="nav"
      px="20px"
      py="10px"
      bg="orange.500"
      alignItems="center"
      color="white"
    >
      <HStack spacing="20px" alignItems="center">
        <CalendarIcon boxSize="2em" />
        <Heading size="lg">
          <NavLink to="/">MealPlansForYou</NavLink>
        </Heading>
      </HStack>

      <Spacer />

      <HStack spacing="20px" display={['none', 'none', 'flex', 'flex']}>
        <NavLink to="/grocery">Grocery List</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
      </HStack>
      <Box display={['flex', 'flex', 'none', 'none']}>
        <NavDrawer />
      </Box>
    </Flex>
  );
}
