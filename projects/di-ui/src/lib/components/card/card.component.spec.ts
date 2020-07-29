import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UICardComponent } from './card.component';

describe('UICardComponent', () => {
  let component: UICardComponent;
  let fixture: ComponentFixture<UICardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UICardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UICardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
