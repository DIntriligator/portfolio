import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIButtonComponent } from './button.component';

@NgModule({
  declarations: [DIButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [DIButtonComponent]
})
export class DIButtonModule { }
