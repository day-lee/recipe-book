import { Database } from "../supabase";

export interface Recipe {
  recipe_name: string;
  duration: number;
  img_link: string;
}

export type GetMainRecipeCards =
  Database["public"]["Functions"]["get_main_recipe_cards"]["Args"];

export type GetMainTags =
  Database["public"]["Functions"]["get_main_tags"]["Args"];

export type GetMainTagFilterRecipeCards =
  Database["public"]["Functions"]["get_main_tag_filter_recipe_cards"]["Args"];

export type GetMainSearchByTerm =
  Database["public"]["Functions"]["get_main_search_by_term"]["Args"];
