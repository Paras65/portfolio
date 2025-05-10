import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Form submission triggered");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {isSubmitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="pageclip-form"
          action="https://send.pageclip.co/qdL5l7SviCZnwEdHMRKlxdUPKeWD4FBK"
          method="post"
        >
          <div className="formGroup">
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="pageclip-form__submit"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
