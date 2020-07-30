import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WORK_LISTING } from './work-listing';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent {

  workListing = WORK_LISTING;

  constructor() { }

  onExternalNavigation(link: string) {
    window.open(link, '_blank');
  }

}
