import React, { useEffect } from "react";
import useFadeAnimation from "../useFadeAnimation";

const returnImageIcon = (title) => {
  var imageUrl = "";
  switch (title) {
    case "HTML":
      {
        imageUrl = require("../../assets/images/ImageIcons/html.png");
      }
      break;
    case "CSS":
      {
        imageUrl = require("../../assets/images/ImageIcons/css3.png");
      }
      break;
    case "JAVASCRIPT(ES6)":
      {
        imageUrl = require("../../assets/images/ImageIcons/js.png");
      }
      break;
    case "REACT":
      {
        imageUrl = require("../../assets/images/ImageIcons/react.png");
      }
      break;
    case "REACT NATIVE":
      {
        imageUrl = require("../../assets/images/ImageIcons/react-native.webp");
      }
      break;
    case "TAILWIND":
      {
        imageUrl = require("../../assets/images/ImageIcons/tailwind.png");
      }
      break;
    case "BOOTSTRAP":
      {
        imageUrl = require("../../assets/images/ImageIcons/bootstrap.png");
      }
      break;
    case "REACT BOOTSTRAP":
      {
        imageUrl = require("../../assets/images/ImageIcons/react-bootstrap.png");
      }
      break;
    case "MLKIT":
      {
        imageUrl = require("../../assets/images/ImageIcons/mlkit.png");
      }
      break;
    case "AXIOS":
      {
        imageUrl = require("../../assets/images/ImageIcons/axios.png");
      }
      break;
    case "QONVERSION":
      {
        imageUrl = require("../../assets/images/ImageIcons/qonversion.png");
      }
      break;
    case "EXPRESS":
      {
        imageUrl = require("../../assets/images/ImageIcons/express.png");
      }
      break;
    case "MONGODB":
      {
        imageUrl = require("../../assets/images/ImageIcons/mongodb.png");
      }
      break;
    case "MONGOOSE":
      {
        imageUrl = require("../../assets/images/ImageIcons/mongoose.jpg");
      }
      break;
    case "FIREBASE":
      {
        imageUrl = require("../../assets/images/ImageIcons/firebase.png");
      }
      break;
    case "PASSPORTJS":
      {
        imageUrl = require("../../assets/images/ImageIcons/passportjs.png");
      }
      break;
    case "STRIPE":
      {
        imageUrl = require("../../assets/images/ImageIcons/stripe.jpeg");
      }
      break;
    case "SENDGRID":
      {
        imageUrl = require("../../assets/images/ImageIcons/sendgrid.png");
      }
      break;
    case "HEROKU":
      {
        imageUrl = require("../../assets/images/ImageIcons/heroku.png");
      }
      break;
    case "VSCODE":
      {
        imageUrl = require("../../assets/images/ImageIcons/vscode.jpeg");
      }
      break;
    case "XCODE":
      {
        imageUrl = require("../../assets/images/ImageIcons/xcode.png");
      }
      break;
    case "GIMP":
      {
        imageUrl = require("../../assets/images/ImageIcons/gimp.png");
      }
      break;
    case "AI":
      {
        imageUrl = require("../../assets/images/ImageIcons/ai.png");
      }
      break;
    case "POSTMAN":
      {
        imageUrl = require("../../assets/images/ImageIcons/postman.jpeg");
      }
      break;
    case "BASH":
      {
        imageUrl = require("../../assets/images/ImageIcons/terminal.png");
      }
      break;
    case "GITHUB":
      {
        imageUrl = require("../../assets/images/ImageIcons/github.png");
      }
      break;
    case "NPM":
      {
        imageUrl = require("../../assets/images/ImageIcons/npm.webp");
      }
      break;
    case "GARAGE BAND":
      {
        imageUrl = require("../../assets/images/ImageIcons/garageband.png");
      }
      break;
    case "AUDACITY":
      {
        imageUrl = require("../../assets/images/ImageIcons/audacity.png");
      }
      break;
    case "CUBASE":
      {
        imageUrl = require("../../assets/images/ImageIcons/cubase.png");
      }
      break;
    case "IMOVIE":
      {
        imageUrl = require("../../assets/images/ImageIcons/imovie.jpeg");
      }
      break;
    case "DRAW":
      {
        imageUrl = require("../../assets/images/ImageIcons/draw.png");
      }
      break;
    case "FIGMA":
      {
        imageUrl = require("../../assets/images/ImageIcons/figma.jpeg");
      }
      break;
    case "SWIFT":
      {
        imageUrl = require("../../assets/images/ImageIcons/swift.jpeg");
      }
      break;
    case "C++":
      {
        imageUrl = require("../../assets/images/ImageIcons/cpp.png");
      }
      break;
    case "NGROK":
      {
        imageUrl = require("../../assets/images/ImageIcons/ngrok.png");
      }
      break;
    case "NODE JS":
      {
        imageUrl = require("../../assets/images/ImageIcons/node-js-1174925.png");
      }
      break;
    case "MAILGUN":
      {
        imageUrl = require("../../assets/images/ImageIcons/mailgun.png");
      }
      break;
    case "MIXPANEL":
      {
        imageUrl = require("../../assets/images/ImageIcons/mixpanel.png");
      }
      break;
    case "CLOUDFLARE":
      {
        imageUrl = require("../../assets/images/ImageIcons/cloudflare.png");
      }
      break;
    case "VISUAL STUDIO":
      {
        imageUrl = require("../../assets/images/ImageIcons/visual-studio.png");
      }
      break;
    case "UNREAL EDITOR":
      {
        imageUrl = require("../../assets/images/ImageIcons/unreal.png");
      }
      break;
    case "GITHUB COPILOT":
      {
        imageUrl = require("../../assets/images/ImageIcons/github-copilot.png");
      }
      break;
    case "DOCKER":
      {
        imageUrl = require("../../assets/images/ImageIcons/docker.png");
      }
      break;
    case "REDUX":
      {
        imageUrl = require("../../assets/images/ImageIcons/redux.png");
      }
      break;
    case "AGORA":
      {
        imageUrl = require("../../assets/images/ImageIcons/agora.png");
      }
      break;
    case "TYPESCRIPT":
      {
        imageUrl = require("../../assets/images/ImageIcons/typescript.png");
      }
      break;
    case "NEXT.JS":
      {
        imageUrl = require("../../assets/images/ImageIcons/next.png");
      }
      break;
    case "IMGLY":
      {
        imageUrl = require("../../assets/images/ImageIcons/imgly.png");
      }
      break;
    default: {
      imageUrl = require("../../assets/images/ImageIcons/imovie.jpeg");
    }
  }
  return imageUrl;
};

const ImageIcon = ({ title, index }) => {
  const iconLink = returnImageIcon(title);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "128px",
        height: "128px",
        gap: "20px",
        padding: "16px",
        transition: "opacity 100ms ease-in-out",
        borderRadius: "6px",
        backgroundColor: "white",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.15)"
      }}
    >
      <img
        src={iconLink}
        style={{
          width: "64px",
          height: "64px"
        }}
        alt={`${title} logo`}
      />
      <p style={{ fontSize: "12px", fontWeight: "bold" }}>{title}</p>
    </div>
  );
};

export default ImageIcon;
