const { Quiz } = require("../models/quiz.model");

const quizParamHandler = async (req, res, next, quizId) => {
  try {
    const quiz = await Quiz.findById(quizId);
    if (!quiz)
      return res.status(404).json({ sucess: false, message: "There is no quiz associated with the id provided.Please check and try again" })
    req.quiz = quiz;
    console.log(req.params
    );
    if(req.params.questionId){
      const {quiz} = req;
      const questionId = req.params.questionId;
      const optionId = req.params.optionId;
      const question = quiz.questions.id(questionId);      
      const optionSelected = question.options.id(optionId);

      if(!optionSelected){
        return res.status(404).json({ sucess: false, message: "There is no option associated with the id provided.Please check and try again" })
      }
      req.option = optionSelected;
      console.log("optionSelected: ",req.option);
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Couldnt retrieve the quiz from server",
      errorMessage: err.message
    });
  }
};

module.exports =  {quizParamHandler}