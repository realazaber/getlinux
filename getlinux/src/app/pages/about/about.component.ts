import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';
import { Page } from 'src/app/interfaces/Page';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  pageData: Page | null = null;

  constructor(private pageDataService: PageDataService) {}

  ngOnInit() {
    this.pageDataService
      .getPage('684e2f6e-5238-4b24-9079-2ab1f2b3ea02')
      .subscribe((page) => {
        this.pageData = page;
        console.log('component', this.pageData);
      });
  }
}
