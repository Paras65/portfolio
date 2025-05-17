import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !phone || !message) {
      alert("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\+?\d{10,15}$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch(`https://send.pageclip.co/${import.meta.env.VITE_APP_PAGECLIP_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {isSubmitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form className="pageclip-form" method="post" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="pageclip-form__submit">
            <span>Send</span>
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
