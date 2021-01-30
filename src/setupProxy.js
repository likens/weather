const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api/weather",
    proxy({
      target: "https://api.openweathermap.org/data/2.5/onecall?appid=6aff0b217cdefa11d1254c77ccb78fbf&lat=41.0580943&lon=-85.0129407&units=imperial&exclude=minutely",
      changeOrigin: true
    })
  );
};