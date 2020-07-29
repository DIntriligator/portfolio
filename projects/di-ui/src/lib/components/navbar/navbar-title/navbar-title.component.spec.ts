import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UINavbarTitleComponent } from './navbar-title.component';
import { UINavbarTitleModule } from './navbar-title.module';

describe('UINavbarTitleComponent', () => {
  let component: UINavbarTitleComponent;
  let fixture: ComponentFixture<UINavbarTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UINavbarTitleModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UINavbarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
