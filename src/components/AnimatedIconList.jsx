import React, { useEffect, useState } from "react";
import ImageIcon from "./universalComponents/ImageIcon";
import styles from "./AnimatedIconList.module.css";
import { useInView } from "react-intersection-observer";

const AnimatedIconList = ({ heading, id, iconList, showHeading }) => {
  const [visible, setVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3
  });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [inView]);

  return (
    <div id={id} className={styles.div__icon__container} ref={ref}>
      {!!showHeading && (
        <h2
          style={{
            alignSelf: "flex-start",
            textAlign: "left",
            marginTop: "24px",
            fontWeight: "700",
            color: "#4b5563",
            paddingLeft: "5%"
          }}
        >
          TECH STACK
        </h2>
      )}
      <h2 className="semibold" style={{ color: "#4b5563" }}>
        {heading}
      </h2>
      <div className={styles.icon__list}>
        {iconList.map((item, index) => {
          return (
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 0.5s ease`,
                transitionDelay: `${index * 0.03}s`
              }}
            >
              <ImageIcon key={index} title={item} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AnimatedIconList;
