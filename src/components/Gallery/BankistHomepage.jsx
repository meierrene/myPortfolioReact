import React from 'react';

const BankistHomepage = () => {
  return (
    <div className="postcard">
      <div className="gallery-img">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://renemeier-gallery.netlify.app/projects/bankist%20homepage/"
        >
          <img
            src={require('./img/bankist-homepage.png')}
            alt="Bankist Homepage advanced DOM JS"
          />
        </a>
      </div>
      <span className="gallery-title">Bankist Homepage</span>
    </div>
  );
};

export default BankistHomepage;
