const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    finishBy: {
      type: String,
      required: true,
    },
    goalText: {
      type: String,
      required: true,
    },
    obstacles: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
