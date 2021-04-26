const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const Engagement = require("../models/engagement");

router.route("/contacts").get(async (req, res) => {
  const contacts = await Contact.find({});
  try {
    res.json(contacts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.route("/engagements").get(async (req, res) => {
  const engagements = await Engagement.find({});
  try {
    res.json(engagements);
  } catch (err) {
    res.json({ message: err });
  }
});

router.route("/add/contact").post((req, res) => {
  req.socket.setTimeout(1000 * 60 * 10);
  const contacts = new Contact({
    type: req.body.type,
    name: req.body.name,
    title: req.body.title,
    address: req.body.address,
    suite: req.body.suite,
    city: req.body.city,
    province: req.body.province,
    country: req.body.country,
    postalCode: req.body.postalCode,
    email: req.body.email,
    phone: req.body.phone,
    orgName: req.body.orgName,
    orgAddress: req.body.orgAddress,
    orgSuite: req.body.orgSuite,
    orgCity: req.body.orgCity,
    orgProvince: req.body.orgProvince,
    orgCountry: req.body.orgCountry,
    orgPostalCode: req.body.orgPostalCode,
    website: req.body.website,
    engagements: req.body.engagements,
  });
  contacts.save().catch((err) => {
    res.json({ message: err });
  });
});

router.route("/add/engagement").post((req, res) => {
  req.socket.setTimeout(1000 * 60 * 10);
  const engagements = new Engagement({
    subject: req.body.subject,
    type: req.body.type,
    date: req.body.date,
    numParticipants: req.body.numParticipants,
    description: req.body.description,
    policy: req.body.policy,
    tags: req.body.tags,
    comments: req.body.comments,
    contacts: req.body.contacts,
  });

  engagements.save().catch((err) => {
    res.json({ message: err });
  });

  let list = [];

  Contact.find({ _id: { $in: req.body.contacts } }).then((result) => {
    result.forEach((element) => {
      list.push(element.engagements);
    });
  });

  list.push(engagements);

  Contact.updateMany(
    { _id: { $in: req.body.contacts } },
    { $set: { engagements: list } }
  ).then((result) => {
    console.log(result);
  });
});

module.exports = router;
