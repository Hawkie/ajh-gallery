import { APIGatewayEvent, Context } from "aws-lambda";
import dotenv from "dotenv";

exports.handler = async (event: APIGatewayEvent, context: Context) => {
    dotenv.config();
    const name = event.queryStringParameters.name || "World (default)";
    const { EMAIL } = process.env;
    return {
        body: `Hello typescript, ${name}. email is ` + EMAIL,
        statusCode: 200,
    };
};
