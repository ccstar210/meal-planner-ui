import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <h1>
        <NavLink to="/">MealPlanner4You</NavLink>
      </h1>
      <NavLink to="/grocery">Grocery List</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
    </>
  );
}
