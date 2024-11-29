export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      "(deleted) user_recipe_collection": {
        Row: {
          created_at: string
          id: number
          recipe_id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          recipe_id: number
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          recipe_id?: number
          user_id?: number
        }
        Relationships: []
      }
      "(deleted) user_tag_collection": {
        Row: {
          created_at: string
          id: number
          tag_id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          tag_id: number
          user_id: number
        }
        Update: {
          created_at?: string
          id?: number
          tag_id?: number
          user_id?: number
        }
        Relationships: []
      }
      ingredient: {
        Row: {
          category: string | null
          created_at: string
          id: number
          ingredient_name: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          ingredient_name: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          ingredient_name?: string
        }
        Relationships: []
      }
      meal_plan: {
        Row: {
          breakfast_id: number | null
          created_at: string
          date: string
          dinner_id: number | null
          id: number
          lunch_id: number | null
          user_id: number
        }
        Insert: {
          breakfast_id?: number | null
          created_at?: string
          date: string
          dinner_id?: number | null
          id?: number
          lunch_id?: number | null
          user_id: number
        }
        Update: {
          breakfast_id?: number | null
          created_at?: string
          date?: string
          dinner_id?: number | null
          id?: number
          lunch_id?: number | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "meal_plan_breakfast_id_fkey"
            columns: ["breakfast_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_dinner_id_fkey"
            columns: ["dinner_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_lunch_id_fkey"
            columns: ["lunch_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe: {
        Row: {
          copied_recipe_id: number | null
          created_at: string
          created_user_id: number | null
          duration: number
          external_link: string | null
          id: number
          img_link: string | null
          is_copied: boolean
          is_favourite: boolean
          is_private: boolean
          note: string | null
          recipe_name: string
        }
        Insert: {
          copied_recipe_id?: number | null
          created_at?: string
          created_user_id?: number | null
          duration: number
          external_link?: string | null
          id?: number
          img_link?: string | null
          is_copied?: boolean
          is_favourite?: boolean
          is_private?: boolean
          note?: string | null
          recipe_name: string
        }
        Update: {
          copied_recipe_id?: number | null
          created_at?: string
          created_user_id?: number | null
          duration?: number
          external_link?: string | null
          id?: number
          img_link?: string | null
          is_copied?: boolean
          is_favourite?: boolean
          is_private?: boolean
          note?: string | null
          recipe_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_created_user_id_fkey"
            columns: ["created_user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredient: {
        Row: {
          created_at: string
          id: number
          ingredient_id: number
          is_main: boolean | null
          is_optional: boolean | null
          is_sauce: boolean | null
          quantity: string | null
          recipe_id: number
          unit: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          ingredient_id: number
          is_main?: boolean | null
          is_optional?: boolean | null
          is_sauce?: boolean | null
          quantity?: string | null
          recipe_id: number
          unit?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          ingredient_id?: number
          is_main?: boolean | null
          is_optional?: boolean | null
          is_sauce?: boolean | null
          quantity?: string | null
          recipe_id?: number
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredient_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredient"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredient_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_tag: {
        Row: {
          created_at: string
          id: number
          recipe_id: number
          tag_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          recipe_id: number
          tag_id: number
        }
        Update: {
          created_at?: string
          id?: number
          recipe_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "recipe_tag_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_tag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag"
            referencedColumns: ["id"]
          },
        ]
      }
      tag: {
        Row: {
          created_at: string
          id: number
          tag_name: string
        }
        Insert: {
          created_at?: string
          id?: number
          tag_name: string
        }
        Update: {
          created_at?: string
          id?: number
          tag_name?: string
        }
        Relationships: []
      }
      user: {
        Row: {
          created_at: string
          email: string
          id: number
          password: string
          recipe_book_name: string | null
          user_name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          password: string
          recipe_book_name?: string | null
          user_name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          password?: string
          recipe_book_name?: string | null
          user_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_meal_plan_breakfast: {
        Args: {
          input_user_id: number
          input_recipe_id: number
          input_date: string
        }
        Returns: undefined
      }
      create_meal_plan_dinner: {
        Args: {
          input_user_id: number
          input_recipe_id: number
          input_date: string
        }
        Returns: undefined
      }
      create_meal_plan_lunch: {
        Args: {
          input_user_id: number
          input_recipe_id: number
          input_date: string
        }
        Returns: undefined
      }
      delete_meal_plan_breakfast: {
        Args: {
          input_user_id: number
          input_date: string
        }
        Returns: undefined
      }
      delete_meal_plan_dinner: {
        Args: {
          input_user_id: number
          input_date: string
        }
        Returns: undefined
      }
      delete_meal_plan_lunch: {
        Args: {
          input_user_id: number
          input_date: string
        }
        Returns: undefined
      }
      get_main_recipe_cards: {
        Args: {
          input_user_id: number
        }
        Returns: {
          recipe_name: string
          duration: number
          img_link: string
        }[]
      }
      get_main_search_by_term: {
        Args: {
          input_user_id: number
          input_term: string
        }
        Returns: {
          recipe_name: string
          duration: number
          img_link: string
        }[]
      }
      get_main_tag_filter_recipe_cards: {
        Args: {
          input_tag_id: number
          input_user_id: number
        }
        Returns: {
          recipe_name: string
          tag_name: string
          is_favourite: boolean
          note: string
          external_link: string
          duration: number
          img_link: string
        }[]
      }
      get_main_tags: {
        Args: {
          input_user_id: number
        }
        Returns: {
          tag_name: string
        }[]
      }
      get_meal_plan: {
        Args: {
          input_user_id: number
        }
        Returns: {
          meal_time: string
          recipe_name: string
          duration: number
          img_link: string
        }[]
      }
      get_random_meal_pick: {
        Args: {
          input_user_id: number
        }
        Returns: {
          recipe_name: string
          duration: number
          img_link: string
        }[]
      }
      update_meal_plan_breakfast: {
        Args: {
          input_user_id: number
          input_date: string
          input_meal_id: number
        }
        Returns: undefined
      }
      update_meal_plan_dinner: {
        Args: {
          input_user_id: number
          input_date: string
          input_meal_id: number
        }
        Returns: undefined
      }
      update_meal_plan_lunch: {
        Args: {
          input_user_id: number
          input_date: string
          input_meal_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
