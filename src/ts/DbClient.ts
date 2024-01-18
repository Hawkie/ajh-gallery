import dotenv from "dotenv";
import { Db, MongoClient } from "mongodb";

const env = dotenv.config();
const dbUrl: string = process.env.DB_URL;

export class DbClient {
  public db: Db;

  public async connect() {
    const options = { useNewUrlParser: true };
    await MongoClient.connect(dbUrl, options)
      .then((client: MongoClient) => {
        // tslint:disable-next-line:no-console
        console.log("MongoClient.connect Successful");
        this.db = client.db("test");
      })
      .catch((err: any) => {
        // tslint:disable-next-line:no-console
        console.log("MongoClient.connect Failed: " + err);
      });
  }
}

export async function getConnection(url: string): Promise<MongoClient> {
  const options = { useNewUrlParser: true };
  return MongoClient.connect(url, options);
}

export function getDb(connection: MongoClient, name: string): Db {
  return connection.db(name);
}
