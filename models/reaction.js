const { Schema, model, Types } = require("mongoose");
const timeStamp = require("../utils/timeStamp");
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId, // use `Types` instead of `Schema.Type`
      default: () => new Types.ObjectId(), // use a function to generate a new ObjectId on default
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => timeStamp(time),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// // create a model with the schema and export it
module.exports = reactionSchema;
