"use client";
import React, { useState } from "react";
import styles from "./switch.module.css";
const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className={styles.slider} />
    </label>
  );
};

export default Switch;
