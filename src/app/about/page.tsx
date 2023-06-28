import Image from "next/image";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.leftContainer}
        src="/profile.png"
        width={300}
        height={300}
        alt="profile"
      />
      <div className={styles.rightContainer}>
        <p className={styles.text1}>
          About <span className={styles.text2}>me</span>
        </p>
        <p className={styles.text4}>
          I am professional athelete for the past 20 years. I am an inspiration
          to a lot of young sportsmen in the world. By the way I am the most
          influential player in the world
        </p>
        <button className={styles.button} type="button">
          <p>Contact me</p>
        </button>
      </div>
    </div>
  );
};

export default About;
