export interface Food {
  name: string;
  description: string;
  price: number;
  image: string;
  contains: Partial<Contains>;
  tags: Partial<Tags>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Pizza extends Food {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bowl extends Food {}

interface Contains {
  vegan: boolean;
  gluten: boolean;
  fish: boolean;
  shrimp: boolean;
  meat: boolean;
  heat: boolean;
  egg: boolean;
  hot: boolean;
  cheese: boolean;
}

interface Tags {
  new: boolean;
  recommendation: boolean;
  deal: boolean;
}
