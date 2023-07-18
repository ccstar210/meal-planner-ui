import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Grocery from './pages/Grocery';
import Recipes from './pages/Recipes';
import NavBar from './components/layouts/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
}

export default App;
