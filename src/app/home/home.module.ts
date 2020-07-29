import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UISiteWrapperModule } from '../../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UISiteWrapperModule
  ]
})
export class HomeModule {}
