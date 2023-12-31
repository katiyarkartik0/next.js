"use client";

import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status,setStatus] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus('success')
      }
    } catch (e) {
      console.log(e);
      setStatus('error')
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter Your Name:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter your name"
            className={mulish.className}
            value={user.username}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter Your Email:
          <input
            type="text"
            name="email"
            id="email"
            placeholder="enter your email"
            className={mulish.className}
            value={user.email}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter Your Phone Number:
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="enter your phone"
            className={mulish.phone}
            value={user.phone}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          message:
          <textarea
            name="message"
            id="message"
            placeholder="enter your message"
            className={mulish.className}
            value={user.message}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      <div>
        {status === 'success' && <p className={styles.success_msg}>thank you for message</p>}
        {status === 'error' && <p className={styles.error_msg}>there eas an error submitting your message, please retry</p>}

        <button type="submit" className={mulish.className}>
          Send message
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
