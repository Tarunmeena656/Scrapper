const { Schema, model } = require("mongoose");

const stateSchema = new Schema(
  {
    state_name: {
      type: String,
      required: true,
    },
    variant: [{
      type: String
    }]
  },
  { timestamps: false, versionKey: false }
);

module.exports = stateModel = model("state", stateSchema);
