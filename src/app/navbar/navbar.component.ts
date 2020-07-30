import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService, RouteType } from '../../shared/navigation-service/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  constructor(
    private navigation: NavigationService,
    private router: Router
  ) { }

  onItemClicked(route: RouteType) {
    this.navigate(route);
  }

  private navigate(route: RouteType) {
    this.navigation.navigate(route);
  }
}
