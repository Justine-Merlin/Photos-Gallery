import React, { useEffect, useState } from "react";

const ContactForm = ({ setFormData, formData, sendEmail, errorMessage, mailNotCorrect }) => {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    let height = window.innerHeight;
    if(height > 790){
      setRows(10)
    } else {
      setRows(5)
    }
  }, [])
  return (
    <form onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Votre nom ..."
        />
      {errorMessage.nameErr && <p>Veuillez renseigner votre nom</p>}
      </div>
      <div>
        <label htmlFor="mail">Email</label>
        <input
          type="text"
          id="mail"
          name="mail"
          value={formData.mail}
          onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
          placeholder="Votre adresse mail ..."
        />
        {errorMessage.mailErr && <p>Veuillez renseigner votre adresse mail</p>}
        {mailNotCorrect && <p>Merci d'entrer une adresse mail valide</p>}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Votre message ..."
          rows={rows}
        />
        {errorMessage.messageErr && <p>Veuillez renseigner votre message</p>}
      </div>
      <button>Envoyer</button>
    </form>
  );
};

export default ContactForm;
