const { Quiz } = require("../models/quiz.model");
const { extend } = require("lodash");

const getAllQuiz = async (req, res) => {
  try{
    const quizzes = await Quiz.find({});
  res.json({
    success: true,
    quizzes,
    });
  }
  catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  };
}

const getQuizById = (req, res) => {
  try{
        res.json({
        success: true,
        quiz: req.quiz,
      });
  }
  catch (err) {   
    res.json({
      success: false,
      errorMessage: err.message,
    });
  };
}


// To change isSelected to true
const updateOptionStatus = async (req, res) => {
  try{
      const updateStatus = req.body;
      let { quiz,option } = req;
      console.log("params in ctlr",req.params);
      updatedOption = extend(option, updateStatus);
      await updatedOption.save();
     
     
      res.json({
        success: true,
        option: updatedOption,
      });
  }
  catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
}

module.exports={getAllQuiz,getQuizById,updateOptionStatus}