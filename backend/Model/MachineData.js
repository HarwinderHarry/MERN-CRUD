const mongoose = require("mongoose");

const MachineDataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const MachineData = mongoose.model("MachineData", MachineDataSchema);

module.exports = MachineData;
