import React, { useState, useEffect, useRef } from "react";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import Title from "../UI/Title";
import Wrapper from "../Layout/Wrapper";
import SocialLinks from "../UI/SocialLinks";

const Contact = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper className={classes.wrapper} id={id}>
      <section
        className={`${classes.section} ${
          isVisible ? classes.visible : ""
        }`}
        ref={sectionRef}
      >
        <div className={classes["info-container"]}>
          <Title title="Let's Chat!" style={{ padding: 0, color: "#b9faf8" }} />
          <p>
            Whether you have a question, an opportunity, or just want to say
            hello, shoot me a message! I'm always open to new ideas and eager to
            contribute my skills as a Software Engineer.
          </p>
          <p>
            Let's collaborate and create something amazing together! Feel free
            to reach out and let's embark on this coding journey side by side.
          </p>
          <SocialLinks />
        </div>
        <ContactForm />
      </section>
    </Wrapper>
  );
};

export default Contact;
