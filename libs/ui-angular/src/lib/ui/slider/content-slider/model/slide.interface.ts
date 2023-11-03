export interface ContentSliderSlide {
  image?: string;
  body: {
    title: string;
    subtitle: string;
    text: string;
    tags?: string[];
  };
  cta?: {
    text?: string;
  };
}
