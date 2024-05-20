import React, { useState, useEffect } from "react";
import classes from "../Contact/ContactFormNew.module.css";
import emailClasses from "../Contact/EmailStatus.module.css";
import emailjs from "@emailjs/browser";
import EmailStatus from "./EmailStatus";
import { ReactComponent as LoadingSpinner } from "../../assets/loading-spinner-thick.svg";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactFormNew = () => {
  //Need this state to access status codes outside the submit function
  const [emailStatusCode, setEmailStatusCode] = useState(null);

  //REACT-HOOK-FORM SETUP
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, touchedFields },
  } = useForm();

  //user-friendly email status messages
  let statusMessage = null;
  switch (emailStatusCode) {
    case 200:
      statusMessage = "✓ All right, I got your message! I'll look it over ASAP";
      break;
    case 400:
      statusMessage =
        "Could not process request. Please check your data and try again.";
      break;
    case 500:
      statusMessage = "Server error. Please try again later.";
      break;
    case null:
      statusMessage = null;
      break;
    default:
      statusMessage = "Failed to send email. Please try again later.";
  }

  //otherwise, every error message would display at once
  const {
    name: nameFieldTouched,
    email: emailFieldTouched,
    message: messageFieldTouched,
  } = touchedFields;

  const statusClasses =
    emailStatusCode === 200
      ? emailClasses["send-successful"]
      : emailClasses["send-failed"];

  //I only want the SUCCESS message to disappear after 3.5 seconds
  useEffect(() => {
    if (emailStatusCode === 200) {
      reset({
        name: "",
        email: "",
        message: "",
      });

      const timer = setTimeout(() => {
        setEmailStatusCode(null);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [emailStatusCode, reset]);

  const submitForm = async (data) => {
    if (!isValid) {
      return;
    }

    const serviceID = "service_nuurigj";
    const templateID = "template_gpqj79d";
    const userID = "FVtwWw2x0WzKwROJM";

    try {
      const response = await emailjs.send(serviceID, templateID, data, userID);
      console.log("SUCCESS!", response.status, response.text);
      setEmailStatusCode(response.status);
    } catch (error) {
      console.log("FAILED", error);
      setEmailStatusCode(error.status);
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes["all-fields-required"]}>
        ALL FIELDS REQUIRED
      </span>
      <form onSubmit={handleSubmit(submitForm)} className={classes.form}>
        <div className={classes["input-container"]}>
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            id="name"
            type="text"
            placeholder="First and last name"
            aria-label="name"
            className={
              errors.name && nameFieldTouched ? classes.invalid : undefined
            }
          />
          {errors.name && nameFieldTouched ? (
            <span className={classes["error-message"]}>
              {errors.name.message}
            </span>
          ) : undefined}
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email (e.g. name@example.com)",
              },
            })}
            id="email"
            type="text"
            placeholder="e.g. name@example.com"
            aria-label="email"
            className={
              errors.email && emailFieldTouched ? classes.invalid : undefined
            }
          />
          {errors.email && emailFieldTouched ? (
            <span className={classes["error-message"]}>
              {errors.email.message}
            </span>
          ) : undefined}
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            placeholder="Ask me anything!"
            aria-label="message"
            rows="10"
            className={
              errors.message && messageFieldTouched
                ? classes.invalid
                : undefined
            }
          />
          {errors.message && messageFieldTouched ? (
            <span className={classes["error-message"]}>
              {errors.message.message}
            </span>
          ) : undefined}
        </div>

        <button type="submit" className={classes["form-button"]}>
          {isSubmitting ? (
            <LoadingSpinner className={classes["loading-spinner"]} />
          ) : (
            "Let's Chat"
          )}
        </button>

        <AnimatePresence>
          {statusMessage ? (
            <EmailStatus status={statusMessage} className={statusClasses} />
          ) : undefined}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ContactFormNew;
