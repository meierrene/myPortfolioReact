import React, { useState } from 'react';

function Cta() {
  const [sendEmail, setSendEmail] = useState({
    title: '',
    content: ''
  });

  const titleHandler = e => {
    setSendEmail(prevState => {
      return { ...sendEmail, title: e.target.value };
    });
  };

  const contentHandler = e => {
    setSendEmail(prevState => {
      return { ...sendEmail, content: e.target.value };
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    setSendEmail({
      title: '',
      content: ''
    });

    window.open(
      `mailto:renemeier.de@gmail.com?&subject=${sendEmail.title}&body=${sendEmail.content}`
    );
  };

  return (
    <div className="cta-container">
      <h2 className="h2-title">Contact me</h2>
      <form className="cta-form" onSubmit={submitHandler}>
        <input
          className="cta-box subject"
          type="text"
          placeholder="Subject"
          value={sendEmail.title}
          onChange={titleHandler}
          required
        />
        <textarea
          className="cta-box content"
          placeholder="Write your message here..."
          rows="5"
          value={sendEmail.content}
          onChange={contentHandler}
          required
        ></textarea>
        <input type="submit" className="cta-btn" value="Send me" />
      </form>

      <a
        href="https://api.whatsapp.com/send?phone=5519984308466&text=Hey%21%20I%20found%20you%20in%20your%20portfolio."
        rel="noopener noreferrer"
        className="float"
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}

export default Cta;
