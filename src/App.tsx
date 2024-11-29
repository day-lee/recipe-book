import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLists from "./Project/MainLists";
import MealPlanner from "./Project/MealPlanner";
import RandomPick from "./Project/RandomPick";
import RecipeDetails from "./Project/RecipeDetails";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLists />} />
        <Route path="/RecipeDetails" element={<RecipeDetails />} />
        <Route path="MealPlanner" element={<MealPlanner />} />
        <Route path="RandomPick" element={<RandomPick />} />
      </Routes>
    </>
  );
};

export default App;
