import React from "react";
import styles from "./DeveloperExperience.module.css";
import Image from "./universalComponents/Image";
import FullWidthScrollAnimator from "./FullWIdthScroll";
import { ScrollPage } from "react-scroll-motion";

const DeveloperExperienceImage = () => {
  return (
    <ScrollPage>
      <FullWidthScrollAnimator animation="fadeIn" style={{}}>
        <h2
          style={{
            alignSelf: "flex-start",
            textAlign: "left",
            marginTop: "24px",
            fontWeight: "700",
            color: "#4b5563"
          }}
        >
          EXPERIENCE
        </h2>
        <Image image="goodself-page" style={styles.image} />
      </FullWidthScrollAnimator>
    </ScrollPage>
  );
};

export default DeveloperExperienceImage;
