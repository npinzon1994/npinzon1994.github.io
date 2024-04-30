import React, { useRef, useState, useReducer, useEffect } from "react";
import classes from "../Contact/ContactForm.module.css";
import emailClasses from "../Contact/EmailStatus.module.css";
import emailjs from "@emailjs/browser";
import useInput from "../../hooks/use-input";
import EmailStatus from "./EmailStatus";
import loadingSpinner from "../../assets/purple-loading-spinner.svg";
import ErrorMessage from "./ErrorMessage";
import emailSendReducer from "./email-send-reducer";
import { ReactComponent as LoadingSpinner } from "../../assets/purple-loading-spinner-thick.svg";

//form validation functions
const isNotEmpty = (value) => value !== "";
const isValidEmail = (value) =>
  value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const ContactForm = () => {
  const { reducer, defaultState } = emailSendReducer;
  const [sendingState, dispatchSending] = useReducer(reducer, defaultState);
  const [statusMsgVisible, setStatusMsgVisible] = useState(false);
  const [error, setError] = useState();

  //useInput(s)
  const {
    enteredValue: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    validateOnBlurHandler: validateNameOnBlur,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    enteredValue: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    validateOnBlurHandler: validateEmailOnBlur,
    reset: resetEmail,
  } = useInput(isNotEmpty && isValidEmail);

  const {
    enteredValue: message,
    valueIsValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageChangeHandler,
    validateOnBlurHandler: validateMessageOnBlur,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  //refs
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const formIsValid = nameIsValid && emailIsValid && messageIsValid;

  const submitForm = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      if (!formIsValid) {
        if (!nameIsValid) {
          nameInputRef.current.focus();
        } else if (!emailIsValid) {
          emailInputRef.current.focus();
        } else if (!messageIsValid) {
          messageInputRef.current.focus();
        }
        return;
      }

      dispatchSending({ type: "SENDING" });
      const result = await emailjs.sendForm(
        "service_nuurigj",
        "template_gpqj79d",
        form.current,
        "JioaKW-iFHKYcmt6F"
      );

      // if (result.status !== "200") {
      //   throw new Error("Could not successfully send email.");
      // }

      resetName();
      resetEmail();
      resetMessage();
      dispatchSending({ type: "SEND_SUCCESSFUL" });
      dispatchSending({ type: "NOT_SENDING" });
      setStatusMsgVisible(false);
    } catch (error) {
      setError(error.text);
      dispatchSending({ type: "NOT_SENDING" });
      dispatchSending({ type: "SEND_UNSUCCESSFUL" });
      setStatusMsgVisible(false);
    }
  };

  useEffect(() => {
    setStatusMsgVisible(true);
  }, []);

  const { isSending } = sendingState;
  const nameClasses = `${classes.input} ${classes.name}`;

  //determining which status message should be shown
  let emailStatus;
  if (isSending) {
    emailStatus = (
      <EmailStatus
        status="Sending..."
        className={emailClasses.sending}
        img={{
          src: loadingSpinner,
          alt: "Loading Spinner",
          className: emailClasses["loading-spinner"],
        }}
      />
    );
  } else if (!statusMsgVisible && !error) {
    emailStatus = (
      <EmailStatus
        status="Email sent successfully!"
        className={classes.success}
        img={{ className: emailClasses["loading-spinner-hidden"] }}
      />
    );
  } else if (!statusMsgVisible && error) {
    emailStatus = (
      <EmailStatus
        status={error}
        className={classes.error}
        img={{ className: emailClasses["loading-spinner-hidden"] }}
      />
    );
  }

  return (
    <div className={classes.container}>
      <form onSubmit={submitForm} ref={form} className={classes.form}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          aria-label="name"
          onChange={nameChangeHandler}
          onBlur={validateNameOnBlur}
          className={nameClasses}
          ref={nameInputRef}
          value={name}
        />
        {nameHasError && <ErrorMessage message="*Name is required" />}
        <input
          type="email"
          placeholder="Email"
          name="email"
          aria-label="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailOnBlur}
          className={classes.input}
          ref={emailInputRef}
          value={email}
        />
        {emailHasError && <ErrorMessage message="*Invalid Email" />}
        <textarea
          placeholder="Message"
          name="message"
          aria-label="message"
          rows="10"
          onChange={messageChangeHandler}
          onBlur={validateMessageOnBlur}
          className={classes["text-area"]}
          ref={messageInputRef}
          value={message}
        />
        {messageHasError && <ErrorMessage message="*Message is required" />}
        {emailStatus}
        <button type="submit" className={classes["form-button"]}>
          {isSending ? (
            <>
              Sending...{" "}
              <LoadingSpinner className={classes["loading-spinner"]} />
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
