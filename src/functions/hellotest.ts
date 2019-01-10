import dotenv from "dotenv";

exports.handler = async (event, context) => {
    dotenv.config();
    const name = event.queryStringParameters.name || "World (default)";
    const { EMAIL } = process.env;
    return {
        body: `Hello typescript, ${name}. email is ` + EMAIL,
        statusCode: 200,
    };
};
