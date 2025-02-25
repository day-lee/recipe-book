import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Project/MainLayout";
import MainLists from "./Project/MainLists";
import MealPlanner from "./Project/MealPlanner";
import RandomPick from "./Project/RandomPick";
import RecipeDetails from "./Project/RecipeDetails";
import { SearchProvider } from "./context/searchProvider";

const App: React.FC = () => {
  return (
    <>
      <SearchProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainLists />} />
            <Route path="/recipe-details" element={<RecipeDetails />} />
            <Route path="meal-planner" element={<MealPlanner />} />
            <Route path="random-pick" element={<RandomPick />} />
          </Route>
        </Routes>
      </SearchProvider>
    </>
  );
};

export default App;
