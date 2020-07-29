import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIButtonComponent } from './button.component';

@NgModule({
  declarations: [UIButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [UIButtonComponent]
})
export class UIButtonModule { }
