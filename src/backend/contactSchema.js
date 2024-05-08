const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  email_address: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
