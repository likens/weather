const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api/weather",
    proxy({
      target: "https://api.openweathermap.org/data/2.5/onecall?units=imperial&exclude=minutely",
      changeOrigin: true
    })
  );
};