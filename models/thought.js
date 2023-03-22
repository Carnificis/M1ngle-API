const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction")
const timeStamp = require("../utils/timeStamp")

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
  reactions:[reactionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    get:time => timeStamp(time)
  },
}, 
  {
    toJSON: {
      getters: true,
    },
  }

);

const Thought = model("Thought", thoughtSchema); // close the parentheses and fix the model name
module.exports = Thought; // export the model
