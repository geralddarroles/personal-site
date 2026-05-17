import React, { useEffect } from "react";
import { ScrollPage } from "react-scroll-motion";
import FullWidthScrollAnimator from "./FullWIdthScroll";
import Image from "./universalComponents/Image";
import styles from "./DeveloperExperience.module.css";

const DeveloperExperience = () => {
  const renderText = () => {
    return (
      <>
        <div className={styles.div__content__row}>
          {!isMobile && (
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
          )}
          <h3 style={{ margin: "0px" }} className="semibold">
            Goodself - The Healthy Social Media
          </h3>
          <h3 style={{ margin: "0px" }} className="semibold">
            Full Stack Developer{" "}
          </h3>
          <h6 className="italic" style={{ margin: "0px" }}>
            April 2023 - May 2026 Full Time
          </h6>
          <h6 className="italic" style={{ margin: "0px" }}>
            May 2026 - Preset Contract
          </h6>
        </div>
        <div
          style={{
            marginBottom: "10%",
            textAlign: "left",
            listStyle: "none",
            paddingLeft: 0,
            gap: "12px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <br />
          {data.map((text) => {
            return (
              <h6 key={text.substring(0, 12)} style={{ margin: "0px" }}>
                {text}
              </h6>
            );
          })}
        </div>
      </>
    );
  };

  const renderImage = () => {
    return (
      <>
        {!!isMobile && (
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
        )}
        <Image image="goodself-page" style={styles.image} />
      </>
    );
  };

  const renderContent = () => {
    return (
      <>
        <FullWidthScrollAnimator
          animation="bottomToTop"
          style={{ minHeight: "fit-content" }}
        >
          {renderImage()}
        </FullWidthScrollAnimator>
        <FullWidthScrollAnimator
          animation="topToBottom"
          style={styles.div__content}
        >
          {renderText()}
        </FullWidthScrollAnimator>
      </>
    );
  };

  const renderContentMobile = () => {
    return (
      <FullWidthScrollAnimator
        animation="moveInAndOut"
        style={styles.div__col__container}
      >
        <div className={styles.div__content__row}>
          {renderImage()}
          {renderText()}
        </div>
      </FullWidthScrollAnimator>
    );
  };

  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <ScrollPage className={styles.div__main__container}>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "5%",
          flexDirection: "column"
        }}
      >
        {!isMobile && renderContent()}
        {!!isMobile && renderContentMobile()}
      </div>
    </ScrollPage>
  );
};

export default DeveloperExperience;

const data = [
  "Led development of the web application product, architecting and building 50% of the codebase from scratch using React, Next.js, and TypeScript",
  "Designed, developed, and managed Goodself's Admin Portal / CMS software to streamline content management workflows",
  "Built and maintained the company marketing website under the direction of the executive team",
  "Developed key features for the mobile application using React Native",
  "Created backend APIs using MongoDB App Services, Express, and Firebase Functions",
  "Performed cross - platform code reviews(web, mobile, backend) to maintain code quality",
  "Built universal middleware, hooks, global Redux actions, and reusable components to increase app modularity and ease of development for other developers",
  "Leveraged Generative AI / GitHub Copilot to expedite production as a research, debugging, code review, and contextual documentation tool",
  "Performed E2E testing using Detox for React Native",
  "Optimized React / React Native applications using virtualization, memoization, and other techniques to minimize rendering or data fetching",
  ""
];
