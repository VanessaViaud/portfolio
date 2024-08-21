import React, { useState } from "react";
import axios from "axios";
import "../components/Contact.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/send-email", formData)
      .then((response) => {
        alert("Email envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi de l'email.");
        console.error("There was an error sending the email!", error);
      });
  };

  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__form-label">Nom</label>
          <input
            className="contact__form-text"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="contact__form-label">Email</label>
          <input
            className="contact__form-text"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="contact__form-label">Message</label>
          <textarea
            className="contact__form-text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="contact__form-submit" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
