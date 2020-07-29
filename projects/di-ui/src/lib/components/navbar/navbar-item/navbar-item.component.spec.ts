import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UINavbarItemComponent } from './navbar-item.component';

describe('UINavbarItemComponent', () => {
  let component: UINavbarItemComponent;
  let fixture: ComponentFixture<UINavbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UINavbarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UINavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
