import React from "react";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";
import Title from "../UI/Title";
import { ReactComponent as GithubIcon } from "../../assets/github-mark.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-icon.svg";

const Contact = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes["inner-container"]}>
        <div className={classes["info-container"]}>
          <Title title="Let's Chat!" style={{ padding: 0, color: "#b9faf8" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={classes["social-links"]}>
            <a
              href="https://github.com/npinzon1994"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className={classes.github} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikkipinzon/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className={classes.linkedin} />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
