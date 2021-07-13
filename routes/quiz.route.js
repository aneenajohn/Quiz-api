const express = require("express");
const quizRouter = express.Router();

const {getAllQuiz,getQuizById,updateOptionStatus} = require ("../controllers/quiz.controller.js");
const {quizParamHandler,quizOptionParamHandler} = require("../controllers/param.controller.js");

quizRouter.route("/")
.get(getAllQuiz)

quizRouter.param("quizId", quizParamHandler);

quizRouter.route("/:quizId")
.get(getQuizById)

quizRouter.route("/:quizId/questions/:questionId/:optionId/")
.post(updateOptionStatus);

module.exports = {quizRouter}
 