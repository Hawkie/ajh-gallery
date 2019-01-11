import { IExhibitDetail } from "./Exhibit";

export function readAll(url: string): Promise<IExhibitDetail[]> {
    return fetch(url)
    .then((response: Response) => {
        return response.json();
    });
}

// export function convert(s: string): IExhibitDetail[] {
//     const ar: [] = JSON.parse(s);
//     const eA: IExhibitDetail[] = ar.map((e) => {
//         return e as IExhibitDetail;
//     });
//     return eA;
// }

// export function getAll(url: string): Promise<IExhibitDetail[]> {
//     return readAll(url).then((s: string) => {
//         return convert(s);
//     });
// }
