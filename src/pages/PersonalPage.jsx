import React, { useState, useEffect, useLayoutEffect, useContext } from "react";

//Components
import { ScrollContainer, ScrollPage } from "react-scroll-motion";

import AppPreview from "../components/AppPreview";
import FullWidthScrollAnimator from "../components/FullWidthScrollAnimator";
import AnimatedHistory from "../components/AnimatedHistory";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import useFadeAnimation from "../components/useFadeAnimation";
import axios from "axios";
import PersonalWelcome from "../components/PersonalWelcome";
import AnimatedIconList from "../components/AnimatedIconList";
import Table from "../components/Table";

import styles from "./PersonalPage.module.css";

//Functions

//Context
import { Context as ProgressContext } from "../Context/ProgressContext.js";

//Data
import {
  frontEndIcons,
  serverIcons,
  toolsIcon,
  thirdPartyServices,
  observedElements
} from "../../src/assets/data/data";
import { useInView } from "react-intersection-observer";
import DeveloperExperience from "../components/DeveloperExperience.jsx";

export const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const PersonalPage = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const onChangeForm = (e) => {
    const { value, name } = e.target;
    setFormObject((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const [sectionName, setSectionName] = useState("");
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const { setLoading, setError, setSuccess } = useContext(ProgressContext);

  const submitMessage = async () => {
    if (formObject.name.length === 0 || formObject.email.length === 0) {
      alert("Please ensure that name and email are not blank");
      return;
    }

    const isEmailValid = validateEmail(formObject.email);

    if (isEmailValid === false) {
      alert("Please enter a valid email");
      return;
    }

    try {
      setLoading("Sending Message");
      const res = await axios.post("/api/sendMessageToMe", formObject);
      if (res.data === "success") {
        setSuccess("Message Sent, thank you");
        setIsMessageSent(true);
      }
    } catch (err) {
      setError(
        "Error sending the message, please send the email at gerald.darroles@gmail.com"
      );
    }
  };

  const sectionObserver = new IntersectionObserver((elements) => {
    if (elements[0].isIntersecting && isHeadingVisible == false) {
      setIsHeadingVisible(true);
      setTimeout(() => {
        switch (elements[0].target.id) {
          case "#welcome":
            {
              setSectionName("");
            }
            break;
          case "#apps":
            {
              setSectionName("MOBILE AND WEB APPS");
            }
            break;
          case "#tech-stacks":
            {
              setSectionName("TECH STACK");
            }
            break;
          case "#work":
            {
              setSectionName("EXPERIENCE");
            }
            break;
          case "#education":
            {
              setSectionName("EDUCATION");
            }
            break;
          case "#skills":
            {
              setSectionName("SKILLS");
            }
            break;
          case "#experience":
            {
              setSectionName("EXPERIENCE");
            }

            break;
          default: {
            setSectionName("");
          }
        }
      }, 500);
      setTimeout(() => {
        setSectionName("");
        setIsHeadingVisible(false);
      }, 3000);
    }
  });

  useLayoutEffect(() => {
    observedElements.forEach((item) => {
      const element = document.getElementById(item);
      if (!element) return;
      sectionObserver.observe(element);
    });
  }, []);

  const [opacity, fadeIn, reset] = useFadeAnimation();

  useEffect(() => {
    reset();
    fadeIn(0);
  }, [sectionName]);

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
    <div className={styles.portfolio}>
      <ScrollContainer
        snap="none"
        className={styles.portfolio__scroll__container}
      >
        <ScrollPage>
          {/** Travels with the web screen */}
          <FullWidthScrollAnimator
            animation="beginning"
            style={styles.scroll__animator__splash}
          >
            <div id="#welcome" />
            <PersonalWelcome />
          </FullWidthScrollAnimator>
        </ScrollPage>
        <ScrollPage></ScrollPage>
        <div id="#work">
          <DeveloperExperience />
        </div>
        {!isMobile && <ScrollPage></ScrollPage>}
      </ScrollContainer>

      <div id={"#tech-stacks"} className={styles.portfolio__tech__stack}>
        <AnimatedIconList
          iconList={frontEndIcons}
          heading={"FRONT END"}
          id="#front-end"
          showHeading
        />

        <AnimatedIconList
          iconList={serverIcons}
          heading={"BACK END & DATABASES"}
          id="#server"
        />

        <AnimatedIconList iconList={toolsIcon} heading={"TOOLS"} id="#tools" />

        <AnimatedIconList
          iconList={thirdPartyServices}
          heading={"THIRD PARTY SERVICES"}
          id="#media"
        />
      </div>
      <ScrollContainer>
        <AppPreview
          title="WHO'S MARY REFERENCES (WEBAPP)"
          dateBuilt="Released April 2022"
          image="preview2"
          description="A powerful tool for recruiters and volunteer managers to get references for their new recruits quickly. Features like interactive forms, reference reports, and automatic emailing allows recruiters to expedite their recruitment. This app uses 3rd party services, e.i.: Sendgrid, Stripe, Heroku and MongoDB and built on React and Node.js. Your references will be safe and delivered to you on time with Who's Mary."
          developerDesc="The app is developed with a responsive UI, RESTful APIs, pagination, custom components, custom hooks, custom animations, and more. While the back end is running on Node.js / Express.js with security features, webhooks, session storage, NoSQL database, MongoDB, hidden environment variables, middlewares, downloadable reports, automatic emailing with custom templates and more."
          link="https://whosmaryref.com"
          showHeading
        />
        <ScrollPage></ScrollPage>
        <AppPreview
          title="EPIC DANCE (iOS App)"
          dateBuilt="Released December 2022"
          image="epicdance"
          description="Built an interactive dance game using Google ML Kit pose detection Built a gesture-based control system by mapping real-time hand movements captured with the front-facing camera to interact with sprites generated on screen"
          developerDesc="A computer vision based game that processes camera data in real time using image buffer, optimized to manage battery life and cpu / gpu performance during pose detection, body tracking, and graphics-heavy gameplay. Developed the app using MVC architecture, singleton patterns, and delegates/protocols, with an adaptive UI built using SwiftUI, UIKit, and SpriteKit.  Integrated Stripe payments APIs, SendGrid, social authentication, and Firebase Firestore for storage. Designed gamification features (badges, achievements) to improve user engagement"
          link="https://apps.apple.com/app/epicdance/id1664587527"
        />
        <ScrollPage></ScrollPage>
        <AppPreview
          title="POCKET WALLET (iOS / Android)"
          dateBuilt="Release August 2021"
          image="pocketwallet"
          description="Budgeting app with 2,800+ authenticated users, allowing friends and families to track expenses in real time."
          developerDesc="A client only React Native app with Firebase for data storage. The app features social authentication, custom animation, redux, subscription using Qonversion API and many more. Data storage uses strict Firestore Security rules to ensure the safety of the user's data."
          link="https://apps.apple.com/ca/app/pocketwallet-budget-app/id1564610616"
        />
        <ScrollPage></ScrollPage>
        <AppPreview
          title="YSM SNACK COUNTER (iOS / Android)"
          dateBuilt="Release on April 2020"
          image="snack-counter"
          description="Developed an app to track meal distribution during COVID-19 as demand surged by 300%. Data was used to help secure funding for meals from various donors, including a restaurant chain and the government"
          developerDesc=" React Native app"
          link=""
        />
        <ScrollPage>
          <FullWidthScrollAnimator animation="fadeInAndOut">
            <div>
              <AnimatedHistory
                title="EDUCATION"
                image="programming"
                id={"#education"}
                details={[
                  {
                    organization:
                      "Bachelor of Arts (Honours) -York University)",
                    description: ""
                  }
                ]}
              />
            </div>
          </FullWidthScrollAnimator>
        </ScrollPage>
      </ScrollContainer>

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

      {/* <a className='p-5 mt-10 no-underline border-2 rounded-lg cursor-pointer lg:mb-10 mb-36' href="https://drive.google.com/file/d/1tKZO7ML_tSTj1biXlVGubSAAR4eWyFDu/view?usp=share_link">
                <div className="flex flex-row items-center justify-center w-full gap-5 text-gray-800 cursor-pointer ">
                    <Image
                        image="draw"
                        style={"h-20"}
                    />
                    <div className="flex flex-col gap-5 ">
                        <h4 className="font-bold ">WIREFRAMING AND PLANNING</h4>
                        <p>
                            BONUS : Click here to view the PocketWallet App blueprint and wireframe
                        </p>
                    </div>
                </div>
            </a> */}

      {/* <AnimatedHistory
        title="EMPLOYMENT"
        image="review"
        id={"#work"}
        details={[
          {
            organization:
              "YONGE STREET MISSION(YSM) - VOLUNTEER RESOURCES COORDINATOR",
            date: "April 2019 - August 2022",
            description:
              "Expanded the mentoring program of Yonge Street Mission. Creating a program and framewrok that is based on research leading to success of many individuals and families living with poverty. Developed and facilitated social work training modules for students and volunteers"
          },
          {
            organization: "ST.JOHN AMBULANCE - COMMUNITY SERVICES COORDINATOR",
            date: "January 2014 - April 2019",
            description:
              "Lead and supported the expansion and everyday programming of the Therapy Dog Program, Youth Program, and Advance Medical First Responder Program"
          }
        ]}
      />
      <Table skillsTableData={skillsTableData} id={"#skills"} /> */}

      {/* {isMessageSent == true ? (
        <div className="flex flex-col items-center w-full mb-20 lg:mb-96">
          <h3 className="p-10 text-gray-600">Thank you for your message! </h3>
          <h3 className="p-10 text-gray-600">
            I will reach out to you as soon as I can.{" "}
          </h3>
        </div>
      ) : (
        <div className="items-center flex flex-col border-gray-600 mb-20 border-2 rounded-lg pb-5 lg:mb-96 mt-10 w-[90%] lg:max-w-[600px]">
          <h5 className="mt-5 text-purple-800 text-bold">CONTACT ME</h5>
          <div className="flex flex-col items-center h-full gap-10 py-10 lg:px-10 lg:flex-row-reverse ">
            <div className="flex flex-col items-end gap-2 text-gray-800">
              <h6 className="lg:text-right">I would like to hear from you</h6>
              <h6 className="lg:text-right">You can send a message here </h6>
              <a
                className="text-gray-800 no-underline text-semibold"
                type="tel"
              >
                416-779-9519{" "}
              </a>
              <a
                className="text-gray-800 no-underline text-semibold"
                href="mailto:gerald.darroles@gmail.com"
                type="email"
              >
                gerald.darroles@gmail.com{" "}
              </a>
              <p>Gerald Darroles</p>
            </div>
            <div className="flex flex-col w-full gap-10">
              <TextInput
                name="email"
                label="Email"
                placeholder="awesomerecruiter@gmail.com"
                onChange={onChangeForm}
                value={formObject.email}
                tooltip={
                  "Please enter your email and I will respond to you as soon as I can"
                }
                maxLength={50}
                required={true}
                type="text"
                width={"lg:w-3/4"}
              />
              <TextInput
                name="name"
                label="Name"
                placeholder="Awesome Recruiter"
                onChange={onChangeForm}
                value={formObject.name}
                tooltip={
                  "Please enter your email and I will respond to you as soon as I can"
                }
                maxLength={25}
                required={true}
                type="text"
                width={"lg:w-3/4"}
              />
              <textarea
                value={formObject.message}
                name="message"
                maxLength={1000}
                className=" w-full border-2 h-[12rem] rounded-lg  text-center outline-purple-800 overflow-scroll"
                onChange={onChangeForm}
              />
            </div>
          </div>
          <Button
            title="Send Message"
            onSubmit={() => {
              submitMessage();
            }}
          />
        </div>
      )} */}
    </div>
  );
};

const skillsTableData = {
  heading: "SKILLS",
  tableRows: [
    {
      col1: "COMMUNICATION",
      col2: "User-centered, and collaborative with a focus on building trusting relationships with all stakeholders. Experienced in addressing high-conflict/stressful situations by modeling positive behaviour"
    },
    {
      col1: "PROFESSIONALISM",
      col2: "Pays great attention to detail with a keenness to take initiative whenever opportunities arise"
    },
    {
      col1: "DESIGN",
      col2: "Focus on creating UI and system processes that increase positive user experience"
    }
  ]
};

export default PersonalPage;
