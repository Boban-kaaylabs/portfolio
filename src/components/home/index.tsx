import React from "react";
import styles from "./home.module.css";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <p className={styles.text1}>
          Hello,<span className={styles.text2}> I`m</span>
        </p>
        <p className={styles.text3}>Cristiano Ronaldo</p>
        <p className={styles.text1}>Athelete</p>
        <p className={styles.text4}>
          I am professional athelete for the past 20 years. I am an inspiration
          to a lot of young sportsmen in the world.
        </p>
        <button className={styles.button} type="button">
          <p>Let`s Talk</p>
        </button>
        <div className={styles.socialContainer}>
          <div className={styles.social}>
            <Image
              className={styles.socialIcon}
              src="/twitter.svg"
              width={15}
              height={15}
              alt="twitter icon"
            />
          </div>
          <div className={styles.social}>
            <Image
              className={styles.socialIcon}
              src="/instagram.svg"
              width={15}
              height={15}
              alt="instagram icon"
            />
          </div>
          <div className={styles.social}>
            <Image
              className={styles.socialIcon}
              src="/facebook.svg"
              width={15}
              height={15}
              alt="facebook icon"
            />
          </div>
        </div>
      </div>
      <Image
        className={styles.rightContainer}
        src="/profile.png"
        width={300}
        height={300}
        alt="profile"
      />
    </div>
  );
};
