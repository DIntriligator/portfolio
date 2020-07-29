import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UICardImageComponent } from './card-image.component';

describe('UICardImageComponent', () => {
  let component: UICardImageComponent;
  let fixture: ComponentFixture<UICardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UICardImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UICardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
