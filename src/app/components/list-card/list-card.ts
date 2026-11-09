import { CommonModule } from '@angular/common';
import { Component, input, Input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GroceryItem } from '../../api/types/grocery.type';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  imports: [CommonModule, MatIconModule, MatCheckboxModule],
  selector: 'app-list-card',
  styleUrl: './list-card.scss',
  templateUrl: './list-card.html',
})
export class ListCard {

  item = input.required<GroceryItem>();
    
completedChange = output<boolean>();
quantityChange = output<number>();
edit = output<void>();
delete = output<void>();


increaseQuantity(): void {
  console.log('STEP 1: Button clicked');

  const newQuantity = this.item().quantity + 1;

  console.log('STEP 2: Emitting', newQuantity);

  this.quantityChange.emit(newQuantity);
}

deleteItem(): void {
  
}

}
