import React from 'react';

const BankistApp = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/bankist%20app/"
        >
          <img
            src={require('./img/bankist-app.png')}
            alt="Bankist App account JS demo"
          />
        </a>
      </div>
      <span className="gallery-title">Bankist App</span>
    </div>
  );
};

export default BankistApp;
