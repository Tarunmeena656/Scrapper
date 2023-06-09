const { Schema, model } = require("mongoose");

const NewsLeaderSchema = new Schema({
  leaderId: {
    type: Schema.Types.ObjectId,
    ref: "LeaderModel",
  },
  newsId: {
    type: Schema.Types.ObjectId,
    ref: "newsModel",
  },
});

module.exports = NewsStateModel = model("news_leader", NewsLeaderSchema);
