const crypto = require("crypto");

// server.js
const express = require("express");
const bodyParser = require("body-parser");
// const twilio = require("twilio");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

function generateKey() {
  return crypto.randomBytes(20).toString("hex");
}

// const accountSid = "ACfe6ff1654e3dc162992b45a80936edbd";
// const authToken = "b0d391046221f74ce814ac9a8646d266";
// const verifySid = "VA6de3d1e30fbf3e3b97b50f3d101647fb";
const client = require("twilio")(accountSid, authToken);

function generateOtp() {
  // Implement a function to generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000);
}

app.post("/generate-otp", (req, res) => {
  const { phoneNumber } = req.body;
  console.log(phoneNumber);
  try {
    client.verify.v2
      .services(verifySid)
      .verifications.create({ to: phoneNumber, channel: "sms" })
      .then((verification) => {
        console.log(verification.status);
        if (verification.status == "pending") {
          res.status(200).json("Success");
        }
      })
      .then(() => {
        const readline = require("readline").createInterface({
          input: process.stdin,
          output: process.stdout,
        });
      });
  } catch (error) {
    console.log("Error", error);
    res.status(404).json("Not Found");
  }
});

app.post("/getotp", async (req, res) => {
  const { otpCode, phoneNumber } = req.body;
  console.log(otpCode, phoneNumber);
  try {
    await client.verify.v2
      .services(verifySid)
      .verificationChecks.create({
        to: phoneNumber,
        code: otpCode,
      })
      .then((verification_check) => {
        console.log("sahi ho ra h", typeof verification_check.status);
        if (verification_check.status === "approved") {
          const token = generateKey();
          res.status(200).json({
            token: token,
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
        res.status(404).json("Not Found");
      });
  } catch (error) {
    console.log("Error", error);
    res.status(404).json("Not Found");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
