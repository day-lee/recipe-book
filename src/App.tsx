import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Project/Header";
import MainLists from "./Project/MainLists";
import MealPlanner from "./Project/MealPlanner";
import RandomPick from "./Project/RandomPick";
import RecipeDetails from "./Project/RecipeDetails";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainLists />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="meal-planner" element={<MealPlanner />} />
        <Route path="random-pick" element={<RandomPick />} />
      </Routes>
    </>
  );
};

export default App;
