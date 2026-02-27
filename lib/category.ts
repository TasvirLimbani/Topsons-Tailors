// Single category item
export interface Category {
  category_id: string;
  category_name: string;
  image: string;
}

// Full API response model
export interface CategoryApiResponse {
  status: boolean;
  message: string;
  categories: Category[];
}

export interface CategoryUI {
  id: string;
  name: string;
  image: string;
}