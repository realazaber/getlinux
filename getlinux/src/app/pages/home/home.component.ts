import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() title: String = '...';
  @Input() pgraph: String = '...';

  @Input() featuredImg: String = '...';
  @Input() featuredImgAlt: String = '...';
}
