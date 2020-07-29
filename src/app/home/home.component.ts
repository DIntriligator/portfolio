import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouteType, NavigationService } from '../../shared/navigation-service/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(
  ) { }

}
