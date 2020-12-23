const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api/weather",
    proxy({
      target: "https://api.darksky.net/forecast/8c71429101c9409672e767129e60416c/41.04192,-85.01329919999999",
      changeOrigin: true
    })
  );
};