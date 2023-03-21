const { Schema, model } = require("mongoose");

const textValidator = (text) => {
  if (!text || text.length < 1 || text.length > 280) {
    // check for falsy `text`
    return false;
  }
  return true;
};

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    validate: [textValidator, "Text must be between 1 and 280 characters"],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Thought = model("Thought", thoughtSchema); // close the parentheses and fix the model name
module.exports = Thought; // export the model
