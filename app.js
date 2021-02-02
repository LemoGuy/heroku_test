let express = require("express");
let app = express();

const port = process.env.PORT || 3000;

function main_route(req, res){
    res.send("hello world");
}

app.get("/", main_route);
app.listen(port);
