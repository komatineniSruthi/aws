exports.handler = async (event) => {
    console.log("Request received");
    const response = {
        statusCode: 200,
        message: "Hello from Lambda"
    };
    return response;
};