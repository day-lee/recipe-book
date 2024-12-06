import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Project/MainLayout";
import MainLists from "./Project/MainLists";
import MealPlanner from "./Project/MealPlanner";
import RandomPick from "./Project/RandomPick";
import RecipeDetails from "./Project/RecipeDetails";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainLists />} />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="meal-planner" element={<MealPlanner />} />
          <Route path="random-pick" element={<RandomPick />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
