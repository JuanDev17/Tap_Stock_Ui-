import { GroceryItem } from "./types/grocery.type";

export const GROCERY_ITEMS: GroceryItem[] = [
  {
    id: '1',
    title: 'Eggs',
    quantity: 2,
    unit: 'dozen',
    note: 'Need these for breakfast!',
    addedBy: 'Juan',
    isCompleted: false,
    createdAt: '2026-11-01T09:30:00Z'
  },
  {
    id: '2',
    title: 'Milk',
    quantity: 1,
    unit: 'gallon',
    note: 'Running low, need for cereal.',
    addedBy: 'Mom',
    isCompleted: false,
    createdAt: '2026-11-01T10:15:00Z'
  },
  {
    id: '3',
    title: 'Strawberries',
    quantity: 2,
    unit: 'pack',
    note: 'For the kids.',
    addedBy: 'Juan',
    isCompleted: true,
    createdAt: '2026-11-01T11:00:00Z'
  }
];
