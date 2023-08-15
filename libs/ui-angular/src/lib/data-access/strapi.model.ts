export interface StrapiCollectionQuery<T> {
  data: {
    id: number;
    attributes: T;
    meta: {
      availableLocales: string[];
      [key: string]: unknown;
    };
  }[];
  meta: {
    [key: string]: unknown;
  };
  error?: unknown;
}

interface FormatDetail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: FormatDetail;
        small: FormatDetail;
        medium: FormatDetail;
        large: FormatDetail;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      created_at: Date;
      updated_at: Date;
    };
  }[];
}

interface StrapiSingleQuery<T> {
  data: {
    id: number;
    attributes: T;
    meta: {
      availableLocales: string[];
      [key: string]: unknown;
    };
  };
  meta: {
    [key: string]: unknown;
  };
  error?: unknown;
}
