import React, { useState } from 'react';
import styles from './Fun.module.css';

function Fun() {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const LIGHTX_API_URL = 'https://api.lightxeditor.com/external/api/v1/avatar';
  console.log('API Key:', import.meta.env.VITE_APP_LIGHTX);
  const API_KEY = import.meta.env.VITE_APP_LIGHTX;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const generateAvatar = async () => {
    setLoading(true);
    setAvatarUrl('');
    try {
      let body;
      let headers = {
        'x-api-key': API_KEY,
      };

      if (selectedFile) {
        body = new FormData();
        body.append('image', selectedFile);
        body.append('prompt', 'A fun cartoon avatar of a developer');
      } else {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify({
          prompt: 'A fun cartoon avatar of a developer',
        });
      }

      const res = await fetch(LIGHTX_API_URL, {
        method: 'POST',
        headers,
        body,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data && data.avatar_url) {
        setAvatarUrl(data.avatar_url);
      } else {
        throw new Error('Avatar URL not found in response');
      }
    } catch (err) {
      console.error('Error generating avatar:', err);
      alert('Failed to generate avatar. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const shareOnSocialMedia = (platform) => {
    const url = encodeURIComponent(avatarUrl);
    const text = encodeURIComponent('Check out my new AI avatar!');
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>🎨 Generate Your LightX AI Avatar</h2>
      <p className={styles.subheading}>
        Upload your photo or use AI to create a fun avatar and share it with your friends!
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.inputFile}
        disabled={loading}
      />
      <br />
      
      <button
        onClick={generateAvatar}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Generating...' : 'Generate Avatar'}
      </button>
      {/* <div style={{ marginTop: '2.5em' }}>
        {avatarUrl && (
          <>
            <img
              src={avatarUrl}
              alt="AI Avatar"
              className={styles.avatarImage}
            />
            <div className={styles.shareButtons}>
              <button
                onClick={() => shareOnSocialMedia('twitter')}
                className={`${styles.shareButton} ${styles.shareButton--twitter}`}
              >
                Twitter
              </button>
              <button
                onClick={() => shareOnSocialMedia('linkedin')}
                className={`${styles.shareButton} ${styles.shareButton--linkedin}`}
              >
                LinkedIn
              </button>
              <button
                onClick={() => shareOnSocialMedia('facebook')}
                className={`${styles.shareButton} ${styles.shareButton--facebook}`}
              >
                Facebook
              </button>
              <button
                onClick={() => shareOnSocialMedia('whatsapp')}
                className={`${styles.shareButton} ${styles.shareButton--whatsapp}`}
              >
                WhatsApp
              </button>
            </div>
          </>
        )}
      </div> */}
    </section>
  );
}

export default Fun;
