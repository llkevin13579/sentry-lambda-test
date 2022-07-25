const withSentry = require("serverless-sentry-lib");

module.exports.hello = withSentry(async (event) => {
  const a = 4 /0;
  menubar();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "2Go Serverless v3.0 Lambda! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
});
