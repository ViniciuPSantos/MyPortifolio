import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import '../styles/Contact.css';

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.loading("Sending message...");
        
        emailjs
        .sendForm('service_rxq27ym', 'template_zmxprlr', formRef.current, 'x2UHmyDjucIAX5LBo' ).then(() => {
            toast.dismiss();
            toast.success("Message sent successfully!", {
                style: {
                    borderRadius: "10px",
                    background: "#04080c",
                    color: "#9bbcdd",
                    border: "1px solid #3f7fbf",
                },
                iconTheme: {
                    primary: "#3f7fbf",
                    secondary: "#04080c",
                },
            });
            formRef.current.reset();
        },
        (error) => {
            toast.dismiss();
            toast.error("Failed to send the message, please try again.", {
                style: {
                    borderRadius: "10px",
                    background: "#04080c",
                    color: "#ff6b6b",
                    border:" 1px solid #3f7fbf",
                }
            });
            console.error(error);
        })
    };

    return(
        <>
        <section id="contact" className="contact-section">
            <motion.div
                className="contact-container"
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.8}}
            >
                <h2>Contact Me</h2>
                <p>
                    Have a project in mind or just want to say hello?
                    Drop me a message and I'll get back to you as soon as possible!
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    <di className="form-group">
                        <input type="text" name="name" placeholder="Your Name" required />
                    </di>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="contact-btn">Send Message</button>
                </form>
            </motion.div>
        </section>
        <Footer />
        </>
        
    )
}

export default Contact;