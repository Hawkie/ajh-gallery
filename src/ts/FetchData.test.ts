// import { IExhibitDetail } from "./Exhibit";
// import { convert } from "./FetchData";

// tslint:disable-next-line:max-line-length
const s: string = "[{\"_id\":\"5c2f850be7179a49f40c8d07\",\"id\":1,\"title\":\"Celebrating the Purbecks\",\"description\":\"View of Corfe Castle in between the downs\",\"medium\":\"Acrylic on canvas\",\"size\":\"50.6 x 50.6 cm\",\"year\":2006,\"located\":\"Poole Hospital, Poole, Dorset, UK\",\"url\":\"https://lh3.googleusercontent.com/MMXggeeF06XzHaQKwz-cjW9I-th8-3RzR5QgnzUsWFCMUslAJZQ0b--6HLZ7_aSqPpAJhvd87n6sFhSo5EHTNle-4YJVIEUtLnZ4-TqIu82TJ7JjkeN8ZXTgCu8F1ITJ3iHOEWfbmj0=w2400\"}]";

// test("convert_returnsOneArrayItem", () => {
//     // tslint:disable-next-line:no-console
//     // console.log(s);
//     const exhibits: IExhibitDetail[] = convert(s);
//     expect(exhibits.length).toBe(1);
// });

// test("convert_GetsDescription", () => {
//     const exhibits: IExhibitDetail[] = convert(s);
//     expect(exhibits[0].description).toBe("View of Corfe Castle in between the downs");
// });

// test("getAll_GetsDescription", async () => {
//     // let ACTUAL_DES: string = null;
//     await fetch("/.netlify/functions/galleryData")
//     .then(async (response: Response) => {
//         const a = response.json();
//         await a.then ((v: any) => console.log(v));
//     });
// });
