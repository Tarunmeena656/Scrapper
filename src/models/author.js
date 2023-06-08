const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
    author_name: {
      type: String,
    },
  },
  { timestamps: false, versionKey: false }
);

module.exports = authorModel = model("author", authorSchema);
