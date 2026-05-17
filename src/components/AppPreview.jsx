import React from "react";
import FullWidthScrollAnimator from "./FullWIdthScroll";
import { ScrollPage } from "react-scroll-motion";
import Image from "./universalComponents/Image";
import styles from "./AppPreview.module.css";

const AppPreview = ({
  title,
  dateBuilt,
  image,
  description,
  developerDesc,
  link,
  showHeading
}) => {
  return (
    <ScrollPage className={styles.app_preview__page}>
      <div
        id={image == "preview2" ? "#apps" : null}
        className={styles.app__preview}
      >
        {!!showHeading && (
          <h2
            style={{
              alignSelf: "flex-start",
              fontWeight: "700",
              color: "#4b5563"
            }}
          >
            PUBLISHED PRODUCTS
          </h2>
        )}
        <FullWidthScrollAnimator
          style={styles.app_preview__image_wrapper}
          animation="bottomToTop"
        >
          <Image
            image={image}
            alt="App logo"
            style={styles.app_preview__image}
          />
        </FullWidthScrollAnimator>
        <FullWidthScrollAnimator
          style={styles.app_preview__content}
          animation="topToBottom"
        >
          <div>
            <h4 className={styles.app_preview__header}>{title}</h4>
            <p className={styles.app_preview__title}>{dateBuilt}</p>
          </div>
          <p
            className={styles.app_preview__date}
            style={{
              textDecoration: "none",
              fontStyle: "none",
              color: "black"
            }}
          >
            {developerDesc}{" "}
          </p>
          <p
            className={styles.app_preview__date}
            style={{ fontStyle: "italic" }}
          >
            {description}
          </p>

          <p className="tiny">
            *APP NO LONGER AVAILABLE DUE TO EMPLOYMENT CONTRACT
          </p>
        </FullWidthScrollAnimator>
      </div>
    </ScrollPage>
  );
};

export default AppPreview;
