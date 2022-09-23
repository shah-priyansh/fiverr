const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cardSchema = new Schema(
  {
    status: {
      type: String,
    },
    hours: {
      type: String,
    },
    amount: {
      type: String,
    },
  },
  {
    collection: "cards",
  }
);

module.exports = mongoose.model("cards", cardSchema);
