import { IExhibitDetail } from "./Exhibit";

// import { IExhibitDetail } from "./Exhibit";
// import { convert } from "./FetchData";

// tslint:disable-next-line:max-line-length
const s1: string = `{
    "_id": {
        "$oid": "5c408b687bfc7edb2423c37e"
    },
    "id": 1,
    "category": "Painting",
    "title": "Celebrating the Purbecks",
    "description": "View of Corfe Castle in between the downs",
    "size": "50.6 x 50.6 cm",
    "medium": "Acrylic on canvas",
    "year": 2006,
    "availability": "NFS",
    "url": "https://lh3.googleusercontent.com/MMXggeeF06XzHaQKwz-cjW9I-th8-3RzR5QgnzUsWFCMUslAJZQ0b--6HLZ7_aSqPpAJhvd87n6sFhSo5EHTNle-4YJVIEUtLnZ4-TqIu82TJ7JjkeN8ZXTgCu8F1ITJ3iHOEWfbmj0=w800",
    "located": "Poole Hospital",
    "exhibited": "Art UK"
}`;
const s2: string = `{
    "_id": {
        "$oid": "5c408b687bfc7edb2423c37e"
    },
    "id": 1,
    "category": "Painting",
    "title": "Celebrating the Purbecks",
    "description": "View of Corfe Castle in between the downs",
    "size": "50.6 x 50.6 cm",
    "medium": "Acrylic on canvas",
    "availability": "NFS",
    "url": "https://lh3.googleusercontent.com/MMXggeeF06XzHaQKwz-cjW9I-th8-3RzR5QgnzUsWFCMUslAJZQ0b--6HLZ7_aSqPpAJhvd87n6sFhSo5EHTNle-4YJVIEUtLnZ4-TqIu82TJ7JjkeN8ZXTgCu8F1ITJ3iHOEWfbmj0=w800",
    "located": "Poole Hospital",
    "exhibited": "Art UK"
}`;
// test("convert_returnsOneArrayItem", () => {
//     // tslint:disable-next-line:no-console
//     // console.log(s);
//     const exhibits: IExhibitDetail[] = convert(s);
//     expect(exhibits.length).toBe(1);
// });

test("convert_GetsDescription", () => {
    // tslint:disable-next-line:no-console
    console.log(s1);
    const exhibit: IExhibitDetail = JSON.parse(s1);
    expect(exhibit.description).toBe("View of Corfe Castle in between the downs");
});

test("convert_GetsMissingYear", () => {
    // tslint:disable-next-line:no-console
    console.log(s2);
    const exhibit: IExhibitDetail = JSON.parse(s2);
    expect(exhibit.year).toBeUndefined();
});

// test("getAll_GetsDescription", async () => {
//     // let ACTUAL_DES: string = null;
//     await fetch("/.netlify/functions/galleryData")
//     .then(async (response: Response) => {
//         const a = response.json();
//         await a.then ((v: any) => console.log(v));
//     });
// });
