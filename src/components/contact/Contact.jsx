import { MdOutlineEmail, MdLocationPin } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>
        I do receive your messages and will respond ASAP! 🙂<br/>
        Get in touch
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shruagarwal01@gmail.com</h5>
            <a href="mailto:shruagarwal01@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
          <MdLocationPin className="contact__option-icon" />
            <h4>Location</h4>
            <h5>Mumbai, India</h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
