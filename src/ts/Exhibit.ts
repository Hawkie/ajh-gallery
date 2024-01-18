export enum categoryEnum {
  Painting = 1,
  Assemblage = 2,
  All = 3,
}

export interface IExhibitBase {
  id: number;
  catId: categoryEnum;
  category: string;
  title: string;
  description: string;
  medium?: string;
  url: string;
  price: number;
}

export interface IExhibitDetail extends IExhibitBase {
  size?: string;
  year?: number;
}
