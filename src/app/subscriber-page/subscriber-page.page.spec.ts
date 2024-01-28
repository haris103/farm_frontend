import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriberPagePage } from './subscriber-page.page';

describe('SubscriberPagePage', () => {
  let component: SubscriberPagePage;
  let fixture: ComponentFixture<SubscriberPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubscriberPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
