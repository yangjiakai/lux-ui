exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://shirabako.com", // 允许任何来源的跨域请求
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello, Netlify Functions!" }),
  };
};
