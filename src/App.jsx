import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Grid, GridItem } from '@chakra-ui/react';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Grocery from './pages/Grocery';
import Recipes from './pages/Recipes';
import NavBar from './components/layouts/NavBar';
import Sidebar from './components/layouts/Sidebar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Grid
      bg="orange.100"
      minHeight="100vh"
      gridTemplateRows="auto 1fr auto"
      gridTemplateColumns="auto 1fr"
    >
      <GridItem as="nav" colSpan="2">
        <NavBar />
      </GridItem>
      <GridItem as="aside" display={['none', 'none', 'grid', 'grid']}>
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan={['2', '2', '1', '1']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </GridItem>
      <GridItem as="footer" colSpan="2">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
