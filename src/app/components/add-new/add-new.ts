
import { Component, input, OnChanges, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { GroceryItem } from '../../api/types/grocery.type';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-add-new',
  imports: [ReactiveFormsModule, MatIconModule, MatExpansionModule],
  templateUrl: './add-new.html',
  styleUrl: './add-new.scss',
})
export class AddNew implements OnChanges {

  // form group for form controls = validations 
  // nonNullable means control value will never be null 

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),

    quantity: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1)
      ]
    }),

  unit: new FormControl<GroceryItem['unit']>('each', {
  nonNullable: true,
  validators: [Validators.required]
}),

    note: new FormControl('', {
      nonNullable: true
    }),

    addedBy: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });
 
  // item supplied by parent ( selected item )
  // null because we're adding a new item, not editing an existing one
  item = input<GroceryItem | null>(null);
  
  // notifying parent component when item been added 
  itemAdded = output<GroceryItem>();

ngOnChanges(): void {

  // existing form ( selected )
  const existingForm = this.item();

  // if no existing form, reset the form and return
  if(!existingForm) {
    this.form.reset();
    return; 
  }

// patchValue() - updates partial form controls - ignoring missing properties 
// setValue() - updates all form controls - throws error if any control is missing
// when a property is updated, 
  this.form.patchValue({
    title: existingForm.title,
    quantity: existingForm.quantity,
    unit: existingForm.unit,
    note: existingForm.note || '',
    addedBy: existingForm.addedBy
  });

}
  // void bc this method doesn't return anything -
onSubmit(): void {  
  // checking if form is valid, if not mark all controls as touched to show validation errors
  // not ideal if we want to see validation errors for each control, but for now it's ok
  if (this.form.invalid) {
    // markAllAsTouched() will mark all controls in form as touched, 
    this.form.markAllAsTouched();
    return;
  }

  // form raw values 
  const values = this.form.getRawValue();

  const existingItem = this.item();

  // check for title and addedBy ? 

  // if title is empty, set error on title control and return
  if (!values.title.trim()) {
    this.form.controls.title.setErrors({ required: true });
    return;
  }

  // fields that can be patched/edited. 
  // same as ngOnChanges() patchValue() 
  const editableFields = {
    title: values.title.trim(),
    quantity: values.quantity,
    unit: values.unit,
    note: values.note.trim(),
    addedBy: values.addedBy,
  }

  // // form values become an object, 
  // // creating new grocery object , 
  // this isn't needed 
  // const newItem: GroceryItem = {
  //   id: crypto.randomUUID(),
  //   title: values.title.trim(),
  //   quantity: values.quantity,
  //   unit: values.unit,
  //   note: values.note.trim(),
  //   addedBy: values.addedBy,
  //   isCompleted: false,
  //   createdAt: new Date().toISOString()
  // };

  const savedItem: GroceryItem = existingItem ? { ...existingItem, ...editableFields } : { ...editableFields, id: crypto.randomUUID(), isCompleted: false, createdAt: new Date().toISOString() };

  // emitting grocery object to the parent component being passed via itemAdded prop
  this.itemAdded.emit(savedItem);

  if(!existingItem) {
    this.resetForm();
}


}

resetForm(): void {
  this.form.reset({
    title: '',
    quantity: 1,
    unit: 'each',
    note: '',
    addedBy: ''
  })
};


}
