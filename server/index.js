const express = require(`express`);
const { config } = require(`dotenv`);
config();

const server = express();
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`servidor iniciado en el puerto ${port}`);
});
