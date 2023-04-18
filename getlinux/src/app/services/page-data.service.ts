import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';

import { Page } from '../interfaces/Page';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://backend-getlinux.azaber.com/jsonapi/node/';

  getPage(pageId: string): Observable<Page> {
    const url = this.baseUrl + 'page/' + pageId;

    return this.http.get<any>(url).pipe(
      switchMap((response) => {
        const featuredImgUrl$ = response.data.relationships
          .field_bp_featured_image
          ? this.http.get<any>(
              response.data.relationships.field_bp_featured_image.links.related
                .href
            )
          : of(null);

        return forkJoin([of(response), featuredImgUrl$]);
      }),
      map(([response, featuredImgResponse]) => {
        const pageData = response.data.attributes;
        const featuredImgData = featuredImgResponse
          ? featuredImgResponse.data.attributes.uri.url
          : null;
        console.log('featuredimgdata', featuredImgData);

        const page: Page = {
          id: pageData['drupal_internal__nid'],
          title: pageData['title'],
          pgraph: pageData['body'].processed,
          featuredImgAlt:
            pageData['field_bp_featured_image']?.data?.meta?.alt || '',
          featuredImg: 'https://backend-getlinux.azaber.com' + featuredImgData,
        };

        console.log('service', page);

        return page;
      })
    );
  }
}
