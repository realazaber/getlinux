import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../interfaces/Page';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  constructor(private http: HttpClient) {}

  baseUrl: String = 'https://backend-getlinux.azaber.com/jsonapi/node/';

  getPage(pageId: Number): Page {
    //Make request to get page title, pgraph, featuredimgalt
    // https://backend-getlinux.azaber.com/jsonapi/node/page/9258053c-6866-4b0f-be50-677e2ce363a3
    //Make request to get featuredimgurl
    // https://backend-getlinux.azaber.com/jsonapi/node/page/9258053c-6866-4b0f-be50-677e2ce363a3/field_bp_featured_image
    //Return page
  }
}
