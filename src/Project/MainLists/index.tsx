import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearch } from "../../context/searchProvider";
import supabase from "../../supabaseClient";
import Filter from "../Filter";
import planner from "../assets/planner.svg";
import unavailableImg from "../assets/unavailable.png";

import {
  GetMainRecipeCards,
  GetMainSearchByTerm,
  GetMainTagFilterRecipeCards,
  Recipe,
} from "../../types";

const defaultStatus = {
  searchResult: false,
  loading: true,
  error: false,
};

const MainLists: React.FC = () => {
  const [recipeCards, setRecipeCards] = useState<Recipe[]>([]);
  const [pageStatus, setPageStatus] = useState(defaultStatus);
  const { searchResult, loading, error } = pageStatus;
  const { searchTerm } = useSearch();

  async function getMainRecipeCards(userId: number): Promise<Recipe[] | null> {
    try {
      const { data, error } = await supabase.rpc("get_main_recipe_cards", {
        input_user_id: userId,
      } as GetMainRecipeCards);
      setRecipeCards(data);
      return data || null;
    } catch (error) {
      setPageStatus((prev) => ({
        ...prev,
        loading: false,
        error: true,
      }));
      console.error("Error retrieving recipes:", error);
      return null;
    } finally {
      setPageStatus((prev) => ({
        ...prev,
        loading: false,
        error: false,
      }));
    }
  }

  async function getMainTagFilterRecipeCards(tagId: number, userId: number) {
    try {
      console.log(tagId);
      if (tagId === 0) {
        return getMainRecipeCards(userId);
      }
      const { data, error } = await supabase.rpc(
        "get_main_tag_filter_recipe_cards",
        {
          input_tag_id: tagId,
          input_user_id: userId,
        } as GetMainTagFilterRecipeCards
      );
      if (error) {
        console.error("Error fetching tag filtered recipe cards:", error);
        throw new Error(error.message);
      }
      setRecipeCards(data);
      console.log("Recipe cards:", data);
      return data;
    } catch (error) {
      setPageStatus((prev) => ({
        ...prev,
        loading: false,
        error: true,
      }));
      if (error instanceof Error)
        console.error("Error executing tag filtered function:", error.message);
    } finally {
      setPageStatus((prev) => ({
        ...prev,
        loading: false,
        error: false,
      }));
    }
  }

  async function getMainSearchByTerm(userId: number, inputTerm: string) {
    try {
      const { data, error } = await supabase.rpc("get_main_search_by_term", {
        input_user_id: userId,
        input_term: inputTerm,
      } as GetMainSearchByTerm);
      setPageStatus((prev) => ({
        ...prev,
        loading: true,
      }));
      setRecipeCards(data);
      if (data.length === 0) {
        console.log("no matching result");
        setPageStatus((prev) => ({
          ...prev,
          searchResult: false,
          loading: true,
        }));
        return null;
      } else {
        setPageStatus((prev) => ({
          ...prev,
          searchResult: true,
          loading: true,
        }));
        return data;
      }
    } catch (error) {
      if (error instanceof Error)
        console.error("Error executing function:", error.message);
    } finally {
      setPageStatus((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  }

  useEffect(() => {
    getMainRecipeCards(2);
    getMainSearchByTerm(2, searchTerm);
  }, [searchTerm]);

  return (
    <>
      <Filter onFetchFiltereList={getMainTagFilterRecipeCards} />
      <div className="flex justify-center pt-6 pb-16 px-2 bg-lightGrey">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error occurred.</div>
        ) : recipeCards.length > 0 ? (
          <ul className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipeCards.map((item: Recipe) => {
              return (
                <li
                  className="relative w-full max-w-[288px] max-h-[380px] bg-white shadow-sm pb-4 hover:shadow-lg"
                  key={item.id}
                >
                  <div>
                    <img
                      className="bg-white"
                      src={item.img_link || unavailableImg}
                      alt={item.recipe_name || "food"}
                    />
                  </div>
                  <div className="m-2 pt-2 px-2 text-lg font-semibold">
                    {item.recipe_name}
                  </div>
                  <div className="m-2 px-2 font-extralight text-sm">
                    {item.duration} mins
                  </div>
                  <button
                    className="absolute w-12 h-12 text-4xl bottom-16 right-2 text-white
                 bg-red-700 rounded-lg border-4 border-white hover:bg-red-800"
                  >
                    <span className="absolute bottom-[3px] left-[9px]"> +</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="font-semibold text-red-800">
            No Matching Results Found
          </div>
        )}
        <Link to="/meal-planner">
          <div className="fixed bottom-4 sm:bottom-[10%] right-4">
            <button
              className="flex justify-center items-center w-full h-14 mx-4 border-white border-y-4 border-l-4
             bg-red-700 text-white font-semibold rounded-l-2xl hover:bg-red-800"
            >
              <img src={planner} alt="meal planner" />
              <span className="mx-2"> Meal planner (2) </span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainLists;
