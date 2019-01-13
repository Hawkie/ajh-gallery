export interface IExhibitBase {
    id: number;
    category: string;
    title: string;
    description: string;
    medium: string;
    url: string;
}

export interface IExhibitDetail extends IExhibitBase {
    size: string;
    year: number;
}
