import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UISiteWrapperComponent } from './site-wrapper.component';
import { UISiteWrapperModule } from './site-wrapper.module';

describe('UISiteWrapperComponent', () => {
  let component: UISiteWrapperComponent;
  let fixture: ComponentFixture<UISiteWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UISiteWrapperModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UISiteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
