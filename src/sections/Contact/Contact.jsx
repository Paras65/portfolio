import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Form submission triggered");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" class={styles.container}>
      <h1 class="sectionTitle">Contact</h1>
      {isSubmitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form action="https://send.pageclip.co/qdL5l7SviCZnwEdHMRKlxdUPKeWD4FBK" class="pageclip-form" method="post">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit" class="pageclip-form__submit">
            <span>Send</span>
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
