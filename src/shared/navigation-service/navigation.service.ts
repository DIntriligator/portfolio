import { Injectable } from '@angular/core';
import { SnNavigation, SnRouteSegments, SnRoute } from 'stratnav';
import { Router } from '@angular/router';

export const ROUTE_NAMES = {
  home: '',
  work: 'work',
  contact: 'contact'
};

export class HomeRoute implements SnRoute {
  getRouteSegments(): SnRouteSegments {
      return [];
  }
}

export class WorkRoute implements SnRoute {
  getRouteSegments(): SnRouteSegments {
    return [
      ROUTE_NAMES.work
    ];
  }
}

export class ContactRoute implements SnRoute {
  getRouteSegments(): SnRouteSegments {
    return [
      ROUTE_NAMES.contact
    ];
  }
}

export const ROUTES = {
  home: new HomeRoute(),
  work: new WorkRoute(),
  contact: new ContactRoute()
};

export type RouteType = keyof typeof ROUTES;

@Injectable({
  providedIn: 'root'
})
export class NavigationService  extends SnNavigation<RouteType> {
  constructor(protected router: Router) {
      super(ROUTES, router);
  }
}
