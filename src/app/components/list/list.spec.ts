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

  it('shows completed items in the picked-up section instead of active items', () => {
    component.groceryItems.push({
      id: '2',
      title: 'Milk',
      quantity: 1,
      unit: 'carton',
      addedBy: 'Juan',
      isCompleted: false,
      createdAt: new Date().toISOString()
    });

    component.onCompletedChange('1', true);
    fixture.detectChanges();

    const activeTitles = Array.from(
      fixture.nativeElement.querySelectorAll<HTMLHeadingElement>('.main-container > .cards-container .item-content h3'),
      (heading: HTMLHeadingElement) => heading.textContent?.trim()
    );
    const pickedUpTitles = Array.from(
      fixture.nativeElement.querySelectorAll<HTMLHeadingElement>('.picked-up-section .item-content h3'),
      (heading: HTMLHeadingElement) => heading.textContent?.trim()
    );

    expect(activeTitles).toEqual(['Milk']);
    expect(pickedUpTitles).toEqual(['Eggs']);
  });
});
