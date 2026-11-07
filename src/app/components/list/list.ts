
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor, MatButtonModule } from '@angular/material/button';

import { ListCard } from '../list-card/list-card';
import { Tags } from '../tags/tags';

import {
  GroceryItem,
  UsualItem
} from '../../api/types/grocery.type';
import { AddNew } from '../add-new/add-new';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    MatIconModule,
    ListCard,
    MatAnchor,
    MatButtonModule,
    Tags,
    AddNew
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  // Your existing mock grocery items
  groceryItems: GroceryItem[] = [
    {
      id: '1',
      title: 'Eggs',
      quantity: 2,
      unit: 'dozen',
      addedBy: 'Juan',
      isCompleted: false,
      createdAt: new Date().toISOString()
    }
  ];

  // Your usual grocery presets
  usualItems: UsualItem[] = [
    {
      id: 'apples',
      title: 'Apples',
      emoji: '🍎',
      quantity: 1,
      unit: 'bag'
    },
    {
      id: 'bananas',
      title: 'Bananas',
      emoji: '🍌',
      quantity: 1,
      unit: 'bunch'
    }
  ];

  get itemCount(): number {
    return this.groceryItems.filter(
      item => !item.isCompleted
    ).length;
  }

  addUsualItem(item: UsualItem): void {

    const exists = this.groceryItems.some(
      grocery => grocery.usualItemId === item.id
    );

    if (exists) return;

    const newItem: GroceryItem = {
      id: crypto.randomUUID(),
      usualItemId: item.id,
      title: item.title,
      quantity: item.quantity,
      unit: item.unit,
      addedBy: 'Juan',
      isCompleted: false,
      createdAt: new Date().toISOString()
    };

    this.groceryItems = [
      ...this.groceryItems,
      newItem
    ];
  }

  get completedItems(): GroceryItem[] {
  return this.groceryItems.filter(item => item.isCompleted);
}

get activeItems(): GroceryItem[] {
  return this.groceryItems.filter(item => !item.isCompleted);
}

get pickedUpMessage(): string {
  if (this.completedItems.length === 1) {
    return `${this.completedItems[0].title} picked up!`;
  }

  return `${this.completedItems.length} items picked up!`;
}


onCompletedChange(id: string, completed: boolean): void {
  this.groceryItems = this.groceryItems.map(item =>
    item.id === id
      ? { ...item, isCompleted: completed }
      : item
  );
}



onQuantityChange(id: string, quantity: number): void {
  console.log('STEP 3: Parent received', id, quantity);

  if (!Number.isInteger(quantity) || quantity < 1) {
    return;
  }

  this.groceryItems = this.groceryItems.map(item =>
    item.id === id
      ? { ...item, quantity }
      : item
  );
}

addItem(item: GroceryItem): void {
  this.groceryItems = [...this.groceryItems, item];
}




}
