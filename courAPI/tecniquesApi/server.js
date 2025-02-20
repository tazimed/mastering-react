const express = require("express");
const server = express();

server.listen(4000);
server.set("view engine", "ejs");
server.get("/", (req, res) => {
  //res.send('message') ;
  // res.status(200).send('Hi !')
  //res.download('server.js');
  //res.sendStatus(404) ;
  //res.json({message:"index.json"})
  res.render("index");
});
