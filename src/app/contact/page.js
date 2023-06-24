import styles from "@/app/contact/contact.module.css";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <ContactCard />
      <section className={styles.contact_section}>
        <h2>we'd love to <span>hear from you</span></h2>
        <ContactForm/>
      </section>
    </>
  );
};

export default Contact;
