import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";
import emailjs, { init } from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../api";

init(USER_ID);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    nameErr: false,
    mailErr: false,
    messageErr: false,
  });
  const [response, setResponse] = useState("");
  const [mailNotCorrect, setMailNotCorrect] = useState(false);

  const isEmail = () => {
    let mail = formData.mail;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (mail.match(regex)) {
      return true;
    } else {
      setMailNotCorrect(true);
      return false;
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (formData.name && isEmail() && formData.message) {
      let templateParams = {
        name: formData.name,
        mail: formData.mail,
        message: formData.message,
      };
      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setResponse(
            "Votre message a été envoyé ! Je vous recontacterai dans les plus brefs délais."
          );
          setFormData({
            name: "",
            mail: "",
            message: "",
          });
          setMailNotCorrect(false);
        },
        function (error) {
          console.log("FAILED...", error);
          setResponse("Une erreur est survenue, merci de réessayer.");
        }
      );
    } else {
      setErrorMessage({
        nameErr: formData.name ? false : true,
        mailErr: formData.mail ? false : true,
        messageErr: formData.message ? false : true,
      });
    }
  };
  return (
    <div className="contact">
      <Navigation />
      <h1>Contactez-moi</h1>
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        sendEmail={sendEmail}
        errorMessage={errorMessage}
        mailNotCorrect={mailNotCorrect}
      />
      {response && <p>{response}</p>}
    </div>
  );
};

export default Contact;
