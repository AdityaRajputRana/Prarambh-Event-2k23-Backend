const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  level: Number,
  id: Number,
  answer: String,
  image: String,
  question: String,
  hint: String,
  category: String,
});

module.exports = mongoose.model("Question", QuestionSchema);
