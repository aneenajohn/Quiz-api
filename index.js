const express = require('express');
var cors = require('cors')
require("dotenv").config();
const {initializeDBConnection}=require("./db/db.js");
const bodyParser = require('body-parser');

const {errorHandler,routeNotFound }  = require("./middlewares/error-handler.middleware.js");

const { quizDB } = require('./quizDB')

const {quizRouter} = require("./routes/quiz.route")

const app = express();
const PORT= 4003;
app.use(cors());
app.use(bodyParser.json());

initializeDBConnection();

// app.get('/', (req, res) => {
//   res.json({api:'This is an api for video library app'})
// });


app.use("/",quizRouter);
// app.get('/', (req, res) => {
//   res.json({ quizDB })
// });


// ERROR HANDLER & 404s This should be the last route,Keep it here dont move
app.use(errorHandler);
app.use(routeNotFound);


app.listen(process.env.PORT || PORT, () => {
  console.log("Server started on port ", PORT);
});
