const config = require("config");
const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, 'public/dist')))

app.listen(config.port, () => { console.log(`Albion-Server running on port ${config.port}`) });
