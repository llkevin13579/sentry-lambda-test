const Sentry = require("@sentry/serverless");

Sentry.AWSLambda.init({
  dsn: "https://639b4db1818e40b788b37996ed0c9320@o446118.ingest.sentry.io/6593773",
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

module.exports.hello = Sentry.AWSLambda.wrapHandler(async (event) => {
  const a = 4 /0;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0 Lambda! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
});
