import React from "react";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import Title from "../UI/Title";
import { ReactComponent as GithubIcon } from "../../assets/github-mark.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";

const Contact = (props) => {
  return (
    <section className={classes.wrapper} id={props.id}>
      <div className={classes["inner-container"]}>
        <div className={classes["info-container"]}>
          <Title title="Let's Chat!" style={{ padding: 0, color: "#b9faf8" }} />
          <p>
            Whether you have a question, an opportunity, or just want to say
            hello, shoot me a message! I'm always open to new ideas and
            eager to contribute my skills as a junior developer 👩‍💻
          </p>
          <p>
            Let's collaborate and create something amazing together! Feel free
            to reach out and let's embark on this coding journey side by side 😊
          </p>
          <div className={classes["social-links"]}>
            <a
              href="https://github.com/npinzon1994"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className={classes.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikkipinzon/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className={classes.icon} />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
