require('dotenv').config();

exports.handler = async(event, context) => {
    const name = event.queryStringParameters.name || "World (default)";
    const { DB_PASS } = process.env;
    return {
        statusCode: 200,
        body: `Hello, ${name}. Password is ` + DB_PASS
    };
};