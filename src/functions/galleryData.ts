import { APIGatewayEvent, Context } from "aws-lambda";
import dotenv from "dotenv";
import { Collection, Db, MongoClient, MongoError } from "mongodb";
import { DbClient, getConnection, getDb } from "../ts/DbClient";

exports.handler = async (event: APIGatewayEvent, context: Context) => {
    return getData()
    .then((e: IExhibit[]) => {
        // tslint:disable-next-line:no-console
        console.log(e);
        return {
            body: JSON.stringify(e),
            statusCode: 200,
        };
    })
    .catch((error: MongoError) => {
        return {
            body: "Error:" + error,
            statusCode: 500,
        };
    });
};

export interface IExhibit {
    id: number;
    description?: string;
}

async function getData(): Promise<IExhibit[]> {
    dotenv.config();

    const dbUrl = process.env.DB_URL;
    const dbName = process.env.DB_NAME;
    const dbCollection = process.env.DB_COLLECTION;
    return getConnection(dbUrl)
    .then((connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        const col: Collection<IExhibit> = dbTest.collection(dbCollection);
        return col.find<IExhibit>().toArray();
    });
}
