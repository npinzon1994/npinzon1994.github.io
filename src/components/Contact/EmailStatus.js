import React from "react";
import classes from "../Contact/EmailStatus.module.css";
import { motion } from "framer-motion";

const EmailStatus = ({ className, status }) => {
  const initial = {
    y: 20,
    opacity: 0,
  };

  const animate = {
    y: 0,
    opacity: 1,
  };

  const exit = {
    y: 20,
    opacity: 0,
  };

  const transition = {
    duration: 0.25,
    delay: 0.15,
  };

  return (
      <motion.span
        key="email-status-message"
        className={`${classes.message} ${className}`}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {status}
      </motion.span>
  );
};

export default EmailStatus;
