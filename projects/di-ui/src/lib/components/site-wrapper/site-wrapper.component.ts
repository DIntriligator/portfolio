import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-site-wrapper',
  templateUrl: './site-wrapper.component.html',
  styleUrls: ['./site-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UISiteWrapperComponent implements OnInit {

  @Input() smallSize = false;

  constructor() { }

  ngOnInit() {
  }

}
