/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'analytics',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss'],
})
export class TimeoutComponent {
  @Input() task: any;
  @Input() taskDef: any;
  @Input() unit: any;
}
