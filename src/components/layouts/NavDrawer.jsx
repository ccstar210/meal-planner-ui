import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="white"
        aria-label="Hamburger Menu"
        icon={<HamburgerIcon boxSize="1.5em" />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="orange.300">
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <VStack spacing="36px" align="stretch">
              <NavLink to="/grocery" onClick={onClose}>
                Grocery List
              </NavLink>
              <NavLink to="/inventory" onClick={onClose}>
                Inventory
              </NavLink>
              <NavLink to="/recipes" onClick={onClose}>
                Recipes
              </NavLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
