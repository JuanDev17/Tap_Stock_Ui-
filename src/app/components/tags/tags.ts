
import { Component, input, output } from '@angular/core';
import {
  GroceryItem,
  UsualItem
} from '../../api/types/grocery.type';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, MatIconModule],
  templateUrl: './tags.html',
  styleUrl: './tags.scss'
})
export class Tags {
  items = input.required<UsualItem[]>();
  existingItems = input.required<GroceryItem[]>();
  itemSelected = output<UsualItem>();

  isAdded(item: UsualItem): boolean {
    return this.existingItems().some(
      grocery => grocery.usualItemId === item.id
    );
  }
}
