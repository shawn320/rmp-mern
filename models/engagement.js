const mongoose = require("mongoose");

const engagement = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  numParticipants: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  policy: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
  contacts: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("engagements", engagement);
