const express = require("express");

const parks = require("./parking.json");
// creer un serveur express

serv = express();

//serv.listen(PORT,function())

serv.listen(4000, () => {
  console.log("serever listening !");
});

serv.get("/", (req, res) => res.send("Bonjour"));

serv.get("/parkings", (req, res) => res.send(parks));

serv.get("/parkings/:id", (req, res) => {
  const rid = parseInt(req.params.id);

  const parking = parks.find((p) => p.id === rid);

  res.status(200).json(parking);
});

serv.post("/parkings", (req, res) => {
  parks.push(req.body);
  res.status(200).json(parks);
});
