const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Configurer le transporteur d'email (ici avec Gmail)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contactvvportfolio@gmail.com", // Remplacez par votre email
      pass: "your_email_password", // Remplacez par votre mot de passe ou un app password
    },
  });

  // Configurer le contenu de l'email
  let mailOptions = {
    from: email,
    user: "contactvvportfolio@gmail.com", // Remplacez par votre email
    to: "your_email@gmail.com", // L'adresse où vous souhaitez recevoir les emails
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoyer l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Erreur lors de l'envoi de l'email" });
    }
    console.log("Email sent: " + info.response);
    res
      .status(200)
      .json({ success: true, message: "Email envoyé avec succès !" });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
