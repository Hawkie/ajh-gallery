export interface IExhibitBase {
    id: number;
    title: string;
    description: string;
    medium: string;
    url: string;
}

export interface IExhibitDetail extends IExhibitBase {
    size: string;
    year: number;
}

export interface IExhibitItem extends IExhibitBase {
    category: string;
  }
