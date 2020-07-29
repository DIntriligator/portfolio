import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIButtonAreaComponent } from './button-area.component';

describe('UIButtonAreaComponent', () => {
  let component: UIButtonAreaComponent;
  let fixture: ComponentFixture<UIButtonAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIButtonAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIButtonAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
