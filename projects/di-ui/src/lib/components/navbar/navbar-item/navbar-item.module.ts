import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UINavbarItemComponent } from './navbar-item.component';

@NgModule({
  declarations: [UINavbarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [UINavbarItemComponent]
})
export class UINavbarItemModule { }
