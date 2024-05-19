import React, { useRef, useState, useReducer, useEffect } from "react";
import classes from "../Contact/ContactForm.module.css";
import emailClasses from "../Contact/EmailStatus.module.css";
import emailjs from "@emailjs/browser";
import useInput from "../../hooks/use-input";
import EmailStatus from "./EmailStatus";
import ErrorMessage from "./ErrorMessage";
import emailSendReducer from "./email-send-reducer";
import { ReactComponent as LoadingSpinner } from "../../assets/loading-spinner-thick.svg";

import { AnimatePresence } from "framer-motion";

//form validation functions
const isNotEmpty = (value) => value !== "";
const isValidEmail = (value) =>
  value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const ContactForm = () => {
  const { reducer, defaultState } = emailSendReducer;
  const [sendingState, dispatchSending] = useReducer(reducer, defaultState);
  const [statusMsgVisible, setStatusMsgVisible] = useState(false);
  const [error, setError] = useState();

  const { isSending, sendSuccessful } = sendingState;

  const statusMessage = sendSuccessful
    ? "✓ All right, I got your message! I'll look it over ASAP"
    : sendSuccessful === false
    ? error
    : null;

  const statusClasses = sendSuccessful
    ? `${emailClasses["send-successful"]}`
    : sendSuccessful === false
    ? `${emailClasses["send-failed"]}`
    : "";

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

  //I only want the SUCCESS message to disappear after 3.5 seconds
  useEffect(() => {
    if (!error) {
      const timer = setTimeout(() => {
        setStatusMsgVisible(false);
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [statusMsgVisible, error]);

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
      await emailjs.sendForm(
        "service_nuurigj",
        "template_gpqj79d",
        form.current,
        "JioaKW-iFHKYcmt6F"
      );

      resetName();
      resetEmail();
      resetMessage();
      dispatchSending({ type: "SEND_SUCCESSFUL" });
      dispatchSending({ type: "NOT_SENDING" });
      setStatusMsgVisible(true);
    } catch (error) {
      setError(error.text);
      dispatchSending({ type: "NOT_SENDING" });
      dispatchSending({ type: "SEND_UNSUCCESSFUL" });
      setStatusMsgVisible(true);
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes['all-fields-required']}>ALL FIELDS REQUIRED</span>
      <form onSubmit={submitForm} ref={form} className={classes.form}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          aria-label="name"
          onChange={nameChangeHandler}
          onBlur={validateNameOnBlur}
          className={`${classes.input} ${
            nameHasError ? classes.invalid : undefined
          }`}
          ref={nameInputRef}
          value={name}
        />
        {nameHasError && <ErrorMessage message="Please enter your name" />}
        <input
          type="email"
          placeholder="Email"
          name="email"
          aria-label="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailOnBlur}
          className={`${classes.input} ${
            emailHasError ? classes.invalid : undefined
          }`}
          ref={emailInputRef}
          value={email}
        />
        {emailHasError && (
          <ErrorMessage message="Please enter a valid email (e.g. test@example.com)" />
        )}
        <textarea
          placeholder="Message"
          name="message"
          aria-label="message"
          rows="10"
          onChange={messageChangeHandler}
          onBlur={validateMessageOnBlur}
          className={`${classes["text-area"]} ${
            messageHasError ? classes.invalid : undefined
          }`}
          ref={messageInputRef}
          value={message}
        />
        {messageHasError && <ErrorMessage message="Please enter a message" />}

        <button type="submit" className={classes["form-button"]}>
          {isSending ? (
            <LoadingSpinner className={classes["loading-spinner"]} />
          ) : (
            "Let's Chat"
          )}
        </button>
        <AnimatePresence>
          {statusMsgVisible ? (
            <EmailStatus status={statusMessage} className={statusClasses} />
          ) : undefined}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactForm;
