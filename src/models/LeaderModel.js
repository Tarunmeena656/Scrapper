const { Schema, model } = require("mongoose");

const ministerSchema = new Schema(
  {
    leader_name: {
      type: String,
      required: true,
    },
    variant: [{
      type: String
    }],
    newsId : [{
      type: Schema.Types.ObjectId,
      ref:'newsModel'
    }]
  },
  { timestamps: false, versionKey: false }
);

module.exports = feedModel = model("leader", ministerSchema);