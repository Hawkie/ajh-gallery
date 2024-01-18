import { APIGatewayEvent, Context } from "aws-lambda";
import dotenv from "dotenv";

export async function handler(event: APIGatewayEvent, context: Context) {
  dotenv.config();
  const name = event.queryStringParameters.name || "World (default)";
  const { EMAIL } = process.env;
  return {
    body: `Hello typescript, ${name}. email is ` + EMAIL,
    statusCode: 200,
  };
}

export default handler;
