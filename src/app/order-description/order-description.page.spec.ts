import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDescriptionPage } from './order-description.page';

describe('OrderDescriptionPage', () => {
  let component: OrderDescriptionPage;
  let fixture: ComponentFixture<OrderDescriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
