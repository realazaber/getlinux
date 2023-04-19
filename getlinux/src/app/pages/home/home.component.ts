import { Component } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';
import { Page } from 'src/app/interfaces/Page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pageData: Page | null = null;

  constructor(private pageDataService: PageDataService) {}

  ngOnInit() {
    this.pageDataService
      .getPage('9258053c-6866-4b0f-be50-677e2ce363a3')
      .subscribe((page) => {
        this.pageData = page;
        console.log('component', this.pageData);
      });
  }
}
