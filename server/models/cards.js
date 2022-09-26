const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardSchema = new Schema(
  {
    status: {
      type: String,
    },
    amount: {
      type: Number,
    },
  },
  {
    collection: "cards",
  }
);

module.exports = mongoose.model("cards", cardSchema);
