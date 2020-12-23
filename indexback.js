const express = require('express');
const request = require('request');

const app = express();

const FORT_WAYNE_COORDS_LAT = "41.0793";
const FORT_WAYNE_COORDS_LNG = "-85.1394";
const DARK_SKY_API_URL = "https://api.darksky.net/forecast/";
const DARK_SKY_API_KEY = "8c71429101c9409672e767129e60416c";

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/weather', (req, res) => {
  request(
    { 
		url: `${DARK_SKY_API_URL}${DARK_SKY_API_KEY}/${FORT_WAYNE_COORDS_LAT},${FORT_WAYNE_COORDS_LNG}`
	},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));