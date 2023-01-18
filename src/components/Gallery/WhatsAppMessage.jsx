import React from 'react';

const WhatsAppMsg = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/whatsapp-message/"
        >
          <img
            src={require('./img/whatsapp-msg.png')}
            alt="WhatsApp Message sender"
          />
        </a>
      </div>
      <span className="gallery-title">WhatsApp Message sender</span>
    </div>
  );
};

export default WhatsAppMsg;
