import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HonestySelectionPage } from './honesty-selection.page';

describe('HonestySelectionPage', () => {
  let component: HonestySelectionPage;
  let fixture: ComponentFixture<HonestySelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HonestySelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
