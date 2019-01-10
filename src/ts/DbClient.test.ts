import dotenv from "dotenv";
import { Collection, Db, MongoClient } from "mongodb";
import { IExhibit } from "../functions/galleryData";
import { getConnection, getDb } from "./DbClient";

dotenv.config();
const dbUrl: string = process.env.DB_URL;
const dbName: string = process.env.DB_NAME;
const dbCollection = process.env.DB_COLLECTION;

// asynchronous tests

test("connectUrl_connects", () => {
    // tslint:disable-next-line:no-console
    console.log("Connection Url: " + dbUrl);
    const options = { useNewUrlParser: true };
    return MongoClient.connect(dbUrl, options).then((connection: MongoClient) => {
            expect(connection.isConnected()).toBe(true);
            connection.close();
        });
});

test("connectDb_setDbName", () => {
    // tslint:disable-next-line:no-console
    console.log("Connection Url: " + dbUrl);
    const options = { useNewUrlParser: true };
    return MongoClient.connect(dbUrl, options).then((connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        expect(dbTest.databaseName).toBe(dbName);
        connection.close();
    });
});

test("readCollections_countOne", async () => {
    let ACTUAL_COLLECTIONS: number = 0;
    const options = { useNewUrlParser: true };
    await MongoClient.connect(dbUrl, options).then(async (connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        await dbTest.collections().then((n: any[]) => {
            ACTUAL_COLLECTIONS = n.length;
        });
        connection.close();
    });
    expect(ACTUAL_COLLECTIONS).toBe(1);
});

test("ExhibitsCollection_ContainsTwoDocuments", async () => {
    let ACTUAL_DOCUMENTS: number = 0;
    const options = { useNewUrlParser: true };
    await MongoClient.connect(dbUrl, options).then(async (connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        const col: Collection<IExhibit> = dbTest.collection(dbCollection);
        await col.countDocuments().then((n) => {
            ACTUAL_DOCUMENTS = n;
        });
        connection.close();
    });
    expect(ACTUAL_DOCUMENTS).toBe(2);
});

test("findCollectionItem_WithId_ReturnsOne", async () => {
    await getConnection(dbUrl).then(async (connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        const col: Collection<IExhibit> = dbTest.collection(dbCollection);
        await col.find<IExhibit>({ id: 1 }).count().then((n) => {
            expect(n).toBe(1);
        });
        connection.close();
    });
});

test("readTestCollectionItemId", async () => {
    let ACTUAL_ID: number = -1;
    await getConnection(dbUrl).then( async (connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        const col: Collection<IExhibit> = dbTest.collection(dbCollection);
        await col.find<IExhibit>().toArray().then((a: IExhibit[]) => {
            ACTUAL_ID = a[0].id;
        });
        connection.close();
    });
    expect(ACTUAL_ID).toBe(1);
});

test("readTestCollectionItemDescription", async () => {
    let ACTUAL_DESCRIPTION: string = null;
    await getConnection(dbUrl).then( async (connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        const col: Collection<IExhibit> = dbTest.collection(dbCollection);
        await col.find<IExhibit>().toArray().then((a: IExhibit[]) => {
            ACTUAL_DESCRIPTION = a[0].description;
        });
        connection.close();
    });
    // tslint:disable-next-line:no-console
    console.log(ACTUAL_DESCRIPTION);
    expect(ACTUAL_DESCRIPTION).toContain("View of Corfe");
});
