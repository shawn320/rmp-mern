const mongoose = require("mongoose");

const contact = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  suite: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  orgAddress: {
    type: String,
    required: false,
  },
  orgSuite: {
    type: String,
    require: false,
  },
  orgCity: {
    type: String,
    required: false,
  },
  orgProvince: {
    type: String,
    required: false,
  },
  orgCountry: {
    type: String,
    required: false,
  },
  orgPostalCode: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  engagements: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("contacts", contact);
