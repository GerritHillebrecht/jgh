/* eslint-disable @nx/enforce-module-boundaries */
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import {
  StrapiImage,
  StrapiService,
} from 'libs/ui-angular/src/lib/data-access';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

interface Product {
  title: string;
  slug: string;
  description: string;
  images: StrapiImage;
}

@Component({
  selector: 'st-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MarkdownModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class ProductComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly strapi = inject(StrapiService);

  protected readonly product = toSignal(
    this.route.params.pipe(
      map(({ product }) => product),
      switchMap((slug) => {
        return this.strapi
          .fetchData<Product>({
            path: 'stones',
            query: `?filters[slug][$eq]=${slug}&populate=image&populate=images`,
          })
          .pipe(map((stones) => stones[0]));
      })
    )
  );
}
