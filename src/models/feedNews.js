
const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    Author : {
         type : String
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    short_description: {
      type: String,
    
    },
    published_date: {
      type: Date,

    },
    long_description: {
      type: String,

    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: "channelModel",
    },
    feedId: {
      type: Schema.Types.ObjectId,
      ref: "feedModel",
    },
  },
  { timestamps: false, versionKey: false }
);


newsSchema.index({ long_description : 'text'})

module.exports = newsModel = model("newsData", newsSchema);
