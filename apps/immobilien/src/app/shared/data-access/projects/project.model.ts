import { StrapiImage } from "@jgh/ui-angular/data-access";

export interface Reference {
  Titel: string;
  Beschreibung: string;
  Datum: Date;
  slug: string;
  Bilder: StrapiImage;
}
