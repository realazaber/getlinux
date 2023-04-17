import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logocard',
  templateUrl: './logocard.component.html',
  styleUrls: ['./logocard.component.scss'],
})
export class LogocardComponent {
  @Input() logoPath: String = '...';
  @Input() altText: String = '...';
  @Input() pagePath: String = '...';
}
