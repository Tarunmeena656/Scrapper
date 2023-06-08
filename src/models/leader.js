const { Schema, model } = require("mongoose");

const LeaderSchema = new Schema(
  {
    leader_name: {
      type: String,
      required: true,
    },
    variant: [
      {
        type: String,
      },
    ],
  },
  { timestamps: false, versionKey: false }
);

module.exports = LeaderModel = model("leader", LeaderSchema);
