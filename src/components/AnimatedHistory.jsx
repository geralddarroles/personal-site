import React, { useEffect, useState, useLayoutEffect } from "react";
import useFadeAnimation from "./useFadeAnimation";
import Image from "./universalComponents/Image";
import styles from "./PersonalWelcome.module.css";

const AnimatedHistory = ({ title, image, details, id }) => {
  const [opacity, fadeIn, reset] = useFadeAnimation();
  const [visible, setVisible] = useState(false);

  const observer = new IntersectionObserver((element) => {
    if (element[0].isIntersecting === true) {
      setVisible(true);
    }
  });

  useLayoutEffect(() => {
    const element = document.getElementById(id);
    observer.observe(element);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (visible === true) {
        reset();
        fadeIn(0);
      }
    }, 300);
  }, [visible]);

  return (
    <div
      id={id}
      style={{ opacity: opacity }}
      className="flex flex-col items-center justify-center w-full lg:mb-96 lg:mt-96 h-fit opacity-40 "
    >
      <Image
        image={image}
        inlineStyle={{
          maxHeight: "200px",
          maxWidth: "200px"
        }}
      />
      <div className="z-10 flex flex-col items-center gap-20 text-left bg-transparent lg:items-start lg:w-2/4">
        <h1 className="semibold">{title}</h1>
        {details.map((item, index) => {
          const { organization, date, description } = item;
          return (
            <div className="flex flex-col items-start gap-4" key={index}>
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-bold">{organization}</h4>
                <h6 className="">{date}</h6>
                <h6 className="">{description}</h6>
              </div>
              <div className={styles.hero__contact}>
                <h4>Reach out now!</h4>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedHistory;
