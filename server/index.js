const express = require("express");
const postRoutes = require('./routes/post.routes')
const userRoutes = require('./routes/users.routes')
var cors = require('cors');
const db = require('./database-mysql');
const app = express();


const PORT =  3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use("/api", postRoutes);
app.use("/api", userRoutes)
app.use(cors());


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
