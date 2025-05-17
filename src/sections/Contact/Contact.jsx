import { useState } from 'react';
import styles from './ContactStyles.module.css';
import { FaEnvelope, FaLinkedin, FaUser, FaPhone, FaCommentDots, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    try {
      await fetch(`https://send.pageclip.co/${import.meta.env.VITE_APP_PAGECLIP_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setIsSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}><FaCommentDots style={{ marginRight: 8, color: "#0078d4" }} />Contact</h1>
      <p className={styles.intro}>
        Have a question, project idea, or just want to connect? Fill out the form below and I’ll get back to you as soon as possible!
      </p>
      {isSubmitted ? (
        <p className={styles.success}><FaPaperPlane style={{ marginRight: 6, color: "#0078d4" }} />Thank you for your message! I will get back to you soon.</p>
      ) : (
        <form className={styles.form} method="post" onSubmit={handleSubmit} autoComplete="on">
          <div className={styles.inputGroup}>
            <FaUser className={styles.inputIcon} />
            <input type="text" name="name" placeholder="Your Name" required autoComplete="name" />
          </div>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.inputIcon} />
            <input type="email" name="email" placeholder="Your Email" required autoComplete="email" />
          </div>
          <div className={styles.inputGroup}>
            <FaPhone className={styles.inputIcon} />
            <input type="tel" name="phone" placeholder="Your Phone (+1234567890)" required autoComplete="tel" />
          </div>
          <div className={styles.inputGroup}>
            <FaCommentDots className={styles.inputIcon} />
            <textarea name="message" placeholder="Your Message" required rows={5}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? <span><FaPaperPlane className={styles.inputIcon} /> Sending...</span> : <span><FaPaperPlane className={styles.inputIcon} /> Send</span>}
          </button>
        </form>
      )}
      
    </section>
  );
}

export default Contact;
