/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, inject } from '@angular/core';
import { StrapiService } from '@jgh/ui-angular/data-access';
import { Quote } from './quote.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BlockQuote } from '@jgh/ui-angular/ui/blockquote';
import { StrapiImage } from '../models';
import { environment } from 'apps/immobilien/src/environments/environment';

interface QuoteWithImage extends BlockQuote {
  image: StrapiImage;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private readonly strapi = inject(StrapiService);

  quotes() {
    return toSignal<QuoteWithImage[]>(
      this.strapi
        .fetchData<Quote>({
          path: 'quotes',
          query: {
            populate: ['Foto'],
            sortBy: 'publishedAt',
            sortOrder: 'asc',
          },
          server: environment.backend_server
        })
        .pipe(
          map((data) =>
            data.data.map((quote) => {
              const { Zitat, Author, Berufsbezeichnung, Foto } =
                quote.attributes;

              return {
                quote: Zitat,
                author: Author,
                position: Berufsbezeichnung,
                image: Foto,
              };
            })
          )
        )
    );
  }
}
