import { StrapiImage } from '../models';

export interface BlogPost {
  Titel: string;
  Vorschautext: string;
  Inhalt: string;
  Vorschaubild: StrapiImage;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  createdBy?: {
    id: number;
    firstname: string;
    lastname: string;
  };
  updatedBy?: {
    id: number;
    firstname: string;
    lastname: string;
  };
}

interface Author {
  username: string;
  avatar: string;
}
