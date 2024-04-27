import React, { useState, useEffect, useRef } from "react";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import Title from "../UI/Title";
import { ReactComponent as GithubIcon } from "../../assets/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";
import Wrapper from "../Layout/Wrapper";

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
          <div className={classes["social-links"]}>
            <a
              href="https://github.com/npinzon1994"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my GitHub. Opens in a new tab."
            >
              <GithubIcon className={classes.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikkipinzon/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my LinkedIn. Opens in a new tab."
            >
              <LinkedinIcon className={classes.icon} />
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </Wrapper>
  );
};

export default Contact;
