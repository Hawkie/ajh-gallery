import { APIGatewayEvent, Context } from "aws-lambda";
import dotenv from "dotenv";
import { Collection, Db, MongoClient, MongoError } from "mongodb";
import { DbClient, getConnection, getDb } from "../ts/DbClient";
import { IExhibitDetail } from "../ts/Exhibit";

exports.handler = async (event: APIGatewayEvent, context: Context) => {
    return getData()
    .then((e: IExhibitDetail[]) => {
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

async function getData(): Promise<IExhibitDetail[]> {
    dotenv.config();

    const dbUrl = process.env.DB_URL;
    const dbName = process.env.DB_NAME;
    const dbCollection = process.env.DB_COLLECTION;
    // tslint:disable-next-line:no-console
    console.log("Connecting to: " + dbUrl);

    return getConnection(dbUrl)
    .then((connection: MongoClient) => {
        const dbTest: Db = getDb(connection, dbName);
        const col: Collection<IExhibitDetail> = dbTest.collection(dbCollection);
        return col.find<IExhibitDetail>().toArray();
    });
}
