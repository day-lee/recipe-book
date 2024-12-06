import supabase from "../../supabaseClient";

import { useEffect, useState } from "react";

import { GetMainTags, Tag, TagAccumulator } from "../../types";

interface FilterProps {
  onFetchFiltereList: (tagId: number, userId: number) => Promise<void>;
}

const Filter: React.FC<FilterProps> = ({ onFetchFiltereList }) => {
  const [data, setData] = useState([]);

  async function getMainTags(userId: number) {
    try {
      const { data, error } = await supabase.rpc("get_main_tags", {
        input_user_id: userId,
      } as GetMainTags);

      if (error) {
        console.error("Error fetching tags:", error);
        throw new Error(error.message);
      }

      const tagList = data.reduce(
        (acc: TagAccumulator, item: Tag) => {
          acc.tags.push({
            id: item["id"],
            tag_name:
              item["tag_name"][0].toUpperCase() +
              item["tag_name"].slice(1).toLowerCase(),
            recipe_count: item["recipe_count"],
          });

          return acc;
        },
        { tags: [], totalRecipeCount: 0 }
      );

      tagList.tags.unshift({
        id: 0,
        tag_name: "All Recipes",
        recipe_count: null,
      });
      console.log(tagList.tags);
      setData(tagList.tags);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error executing function:", error.message);
      }
    }
  }

  useEffect(() => {
    getMainTags(2);
  }, []);

  return (
    <div className="flex items-center w-full sm:h-full bg-red-700 rounded-sm">
      {/* slide needed */}
      <ul className="flex flex-wrap">
        {data.map((item: Tag) => {
          return (
            <button
              key={item.id}
              onClick={() => onFetchFiltereList(item.id, 2)}
            >
              <li className="bg-lightGrey px-4 py-1 m-2 rounded-sm font-light text-sm">
                {item.tag_name} {item.recipe_count && `(${item.recipe_count})`}
              </li>
            </button>
          );
        })}
      </ul>
    </div>
  );
};
export default Filter;
