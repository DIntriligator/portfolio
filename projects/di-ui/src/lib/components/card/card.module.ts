import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UICardComponent } from './card.component';
import { UICardTitleModule } from './card-title/card-title.module';
import { UICardImageModule } from './card-image/card-image.module';

@NgModule({
  declarations: [UICardComponent],
  imports: [
    CommonModule,
    UICardTitleModule,
    UICardImageModule
  ],
  exports: [
    UICardComponent,
    UICardTitleModule,
    UICardImageModule
  ]
})
export class UICardModule { }
