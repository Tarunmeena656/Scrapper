const { Schema, model } = require("mongoose");

const NewsStateSchema = new Schema({
  stateId: {
    type: Schema.Types.ObjectId,
    ref: "stateModel",
  },
  newsId: {
    type: Schema.Types.ObjectId,
    ref: "newsModel",
  },
});

module.exports = NewsStateModel = model("news_state", NewsStateSchema);
