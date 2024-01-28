import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSelectionPage } from './product-selection.page';

describe('ProductSelectionPage', () => {
  let component: ProductSelectionPage;
  let fixture: ComponentFixture<ProductSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
