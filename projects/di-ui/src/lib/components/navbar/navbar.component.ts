import { Component, OnInit, ChangeDetectionStrategy, ContentChildren, ContentChild, QueryList } from '@angular/core';
import { UINavbarTitleComponent } from './navbar-title/navbar-title.component';
import { UINavbarItemComponent } from './navbar-item/navbar-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UINavbarComponent{
  @ContentChild(UINavbarTitleComponent) navTitle: UINavbarTitleComponent;
  @ContentChildren(UINavbarItemComponent) navItems: QueryList<UINavbarItemComponent>;

  constructor(
    private router: Router
  ) { }

  onNavigateHome() {
    this.router.navigate([]);
  }

  onNavItemClick(item) {
    this.emitItemClicked(item);
  }

  private emitItemClicked(item: UINavbarItemComponent) {
    item.navItemClicked.emit();
  }
}
