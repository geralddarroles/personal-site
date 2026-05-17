import React from "react";
import Icon from "./universalComponents/Icon";
import styles from "./PersonalWelcome.module.css";

const PersonalWelcome = () => {
  return (
    <div className={styles.hero} id="#welcome">
      <div className={styles.hero__content}>
        <h2 className={styles.hero__name}>GERALD DARROLES</h2>
        <hr style={{ width: "60%" }} />
        <h3 className={`${styles.hero__title} semibold`}>
          WEB APP AND MOBILE APP
          <br />
          <span>FULL STACK DEVELOPER</span>
        </h3>
        <div className={styles.hero__contact}>
          <h4 className={styles.hero__link} type="tel">
            416-779-9519{" "}
          </h4>
          <h4
            className={styles.hero__link}
            href="mailto:gerald.darroles@gmail.com"
            type="email"
          >
            gerald.darroles@gmail.com{" "}
          </h4>
        </div>
        <h1 className={`custom-d ${styles.hero__status}`}>
          WELCOME RECRUITERS, I AM OPEN TO WORK
        </h1>
      </div>
      <div className={styles.div__bottom__content}>
        <h4 className={styles.hero__subtitle}>
          SCROLL TO SEE EXPERIENCE, TECH STACKS AND APPS
        </h4>
        <Icon icon={"down"} style={styles.hero__icon} />
      </div>
    </div>
  );
};

export default PersonalWelcome;
