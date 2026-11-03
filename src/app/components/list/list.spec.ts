import { ComponentFixture, TestBed } from '@angular/core/testing';
import { List } from './list';

describe('List', () => {
  let component: List;
  let fixture: ComponentFixture<List>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [List],
    }).compileComponents();

    fixture = TestBed.createComponent(List);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates an active item quantity when its quantity button is clicked', () => {
    fixture.detectChanges();

    const increaseButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.quantity-button:last-child');
    increaseButton.click();

    expect(component.groceryItems[0].quantity).toBe(3);
  });
});
