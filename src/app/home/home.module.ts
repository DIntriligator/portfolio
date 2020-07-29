import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UISiteWrapperModule } from '../../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';
import { UICardModule } from '../../../projects/di-ui/src/lib/components/card/card.module';
import { UIButtonAreaModule } from '../../../projects/di-ui/src/lib/components/button-area/button-area.module';
import { UIButtonModule } from '../../../projects/di-ui/src/lib/components/button/button.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UISiteWrapperModule,
    UICardModule,
    UIButtonAreaModule,
    UIButtonModule
  ]
})
export class HomeModule {}
