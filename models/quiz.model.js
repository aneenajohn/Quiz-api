const mongoose = require("mongoose");
const { Schema } = mongoose;

const OptionSchema = new Schema({
  text:{
    type:String,
    required:"Option for question is required"
  },
  isSelected:{
    type:Boolean,
    required:"Has user selected or not is mandatory"
  }
})

const QuestionSchema = new Schema({
  question:{
    type:String,
    required:"Question is required"
  },
  points:{
    type:Number,
    required:"Points for question is required"
  },
  negativePoint:Number,
  options:[OptionSchema],
  answer:{
    type:String,
    required:"Correct answer for the question is required"
  }
})

const QuizSchema = new Schema(
  {
    quizName:{
      type:String,
      required:"Quiz name is required"
    },
    questions:[QuestionSchema]
  }
)


const Quiz = mongoose.model("Quiz", QuizSchema);
const Option = mongoose.model("Option",OptionSchema);

module.exports = { Quiz,Option };