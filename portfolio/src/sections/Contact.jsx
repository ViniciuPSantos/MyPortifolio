import React, { useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useLang } from "../context/LanguageContext";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useLang();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading(t.contact.sending);

    emailjs
      .sendForm("service_rxq27ym", "template_zmxprlr", formRef.current, "x2UHmyDjucIAX5LBo")
      .then(
        () => {
          toast.dismiss();
          toast.success(t.contact.success, {
            style: {
              borderRadius: "10px",
              background: "#04080c",
              color: "#9bbcdd",
              border: "1px solid #3f7fbf",
            },
            iconTheme: { primary: "#3f7fbf", secondary: "#04080c" },
          });
          formRef.current.reset();
        },
        (error) => {
          toast.dismiss();
          toast.error(t.contact.error, {
            style: {
              borderRadius: "10px",
              background: "#04080c",
              color: "#ff6b6b",
              border: "1px solid #3f7fbf",
            },
          });
          console.error(error);
        }
      );
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder={t.contact.name} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder={t.contact.email} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder={t.contact.message} rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-btn">{t.contact.send}</button>
          </form>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;