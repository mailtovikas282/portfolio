const express = require("express");
const app = express();
const mongoose = require("mongoose");
const contact = require("./contactSchema");
const cors = require("cors");

const connectdb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mailtovikas2802:Vikassingh12345@portfolio.rilullf.mongodb.net/portfolio"
    )
    .then(() => {
      console.log("Connected");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

connectdb();

app.use(cors());
app.use(express.query());
app.use(express.urlencoded({ extended: true }));

app.post("/submitContact", async function (req, res) {
  try {
    const userData = JSON.parse(Object.keys(req.body)[0]);
    console.log("dataa-->", userData);

    const { full_name, email_address, message } = userData;
    await contact.create({
      full_name: full_name,
      email_address: email_address,
      message: message,
    });

    res.status(200).send("Data Saved Successfully");
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(3000);
