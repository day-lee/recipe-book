import { Database } from "../supabase";

export interface Recipe {
  id: number;
  recipe_name: string;
  duration: number;
  img_link: string;
}

export interface Tag {
  id: number;
  tag_name: string;
  recipe_count: number;
}

export type TagAccumulator = {
  tags: Tag[];
  totalRecipeCount: number;
};

export type GetMainRecipeCards =
  Database["public"]["Functions"]["get_main_recipe_cards"]["Args"];

export type GetMainTags =
  Database["public"]["Functions"]["get_main_tags"]["Args"];

export type GetMainTagFilterRecipeCards =
  Database["public"]["Functions"]["get_main_tag_filter_recipe_cards"]["Args"];

export type GetMainSearchByTerm =
  Database["public"]["Functions"]["get_main_search_by_term"]["Args"];

export type GetMealPlan =
  Database["public"]["Functions"]["get_meal_plan"]["Args"];

export const mealPlanFunctionMap = {
  breakfast: "create_meal_plan_breakfast",
  lunch: "create_meal_plan_lunch",
  dinner: "create_meal_plan_dinner",
} as const;

export type MealTime = "breakfast" | "lunch" | "dinner";
