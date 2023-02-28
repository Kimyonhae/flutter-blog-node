const express = require("express");

const app = express();

const PORT="3000";

const router = require("./route/route");

//http 통신 특정 url만 지정하기

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/",router);

app.listen(PORT,() => {
    console.log(`starting a server port : ${PORT}`);
});

//file을 읽어와야댐 그걸 json 으로 돌려줌.


