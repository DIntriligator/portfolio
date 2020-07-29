import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UINavbarModule } from '../../../projects/di-ui/src/lib/components/navbar/navbar.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    UINavbarModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
