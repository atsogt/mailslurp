const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../env");
const from = "test-d330ef29-db56-4a02-9507-9eeb0599a5f7@mailslurp.mx";
const to = "test-d330ef29-db56-4a02-9507-9eeb0599a5f7@mailslurp.mx";

const signup = async (req, res) => {
  let config = {
    host: "mailslurp.mx",
    port: 2587,
    secure: false,
    auth: {
      user: "FlqdspsVMJYSuFnvBLX6iY0nYJ6JWrGq",
      pass: "LpsqTbFHYcUYsLOcootn0AD9OTgEcdCK",
    },
  };

  let transporter = nodemailer.createTransport(config);

  await transporter
    .sendMail({
      subject: "Test Email",
      from: from,
      to: to,
      text: "hello world",
      html: "<b>Hello world?</b>",
    })
    .then((info) => {
      return res.status(201).json({
        msg: "you should receive an email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  res.status(201).json("getBill successful");
};
const getbill = (req, res) => {
  const { userEmail } = req.body.email;

  let config = {
    host: "mailslurp.mx",
    port: 2587,
    secure: false,
    auth: {
      user: "FlqdspsVMJYSuFnvBLX6iY0nYJ6JWrGq",
      pass: "LpsqTbFHYcUYsLOcootn0AD9OTgEcdCK",
    },
  };

  let transporter = nodemailer.createTransport(config);

  transporter
    .sendMail({
      subject: "Test Email",
      from: from,
      to: to,
      text: "hello world",
      html: "<b>Hello world?</b>",
    })
    .then((info) => {
      return res.status(201).json({
        msg: "you should receive an email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  res.status(201).json("getBill successful");
};

module.exports = { signup, getbill };
