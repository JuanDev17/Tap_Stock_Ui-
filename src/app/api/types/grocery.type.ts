
export type GroceryUnit =
  | 'each'
  | 'dozen'
  | 'pack'
  | 'box'
  | 'bag'
  | 'bottle'
  | 'gallon'
  | 'lb'
  | 'bunch';

export interface GroceryItem {
  id: string;
  usualItemId?: string;
  title: string;
  quantity: number;
  unit: GroceryUnit;
  note?: string;
  addedBy: string;
  isCompleted: boolean;
  createdAt: string;
}


export interface UsualItem {
  id: string;
  title: string;
  emoji: string;
  quantity: number;
  unit: GroceryUnit;
}