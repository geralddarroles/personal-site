export const skillsList = [
  "Passionate",
  "Friendly ",
  "Born to lead",
  "Collaborative",
  "Awesome!"
];

export const signupQuestions = [
  {
    title: "Let's get to know you better",
    statement:
      "Your name, contact and company information will be shared to references",
    type: "msg",
    property: null
  },
  {
    question: "First Name",
    subheading: "",
    type: "text",
    property: "firstName"
  },
  {
    question: "Last Name",
    subheading: "",
    type: "text",
    property: "lastName"
  },
  {
    question: "Company name",
    subheading: "What is your company/organization/group is called?  ",
    type: "text",
    property: "companyName"
  },
  {
    question: "Position Title",
    subheading: "What is your role?",
    type: "text",
    property: "positionTitle"
  },
  {
    question: "Phone number",
    subheading: "Almost there... the best way to reach you by phone.",
    type: "text",
    property: "phoneNumber"
  },
  {
    question: "Extension",
    subheading: "and your extension number",
    type: "text",
    property: "extension"
  }
];

export const personalInfoQuestions = [
  {
    question: "First Name",
    subheading: "",
    type: "text",
    property: "firstName"
  },
  {
    question: "Last Name",
    subheading: "",
    type: "text",
    property: "lastName"
  },
  {
    question: "Position Title",
    subheading: "What is your role?",
    type: "text",
    property: "positionTitle"
  },
  {
    question: "Company name",
    subheading: "What is your company/organization/group is called?  ",
    type: "text",
    property: "companyName"
  }
];

export const contactInfo = [
  {
    question: "Phone number",
    subheading: "Almost there... the best way to reach you by phone.",
    type: "text",
    property: "phoneNumber"
  },
  {
    question: "Extension",
    subheading: "and your extension number",
    type: "text",
    property: "extension"
  }
];

export const backgroundList = [
  "bgp-1",
  "bgp-2",
  "bgp-3",
  "bgp-4",
  "bgp-5",

  "bgp-7",
  "bgs-1",
  "bgs-2",
  "bgs-3",

  "bgs-5",
  "bgs-6",
  "bgs-7",
  "bgo-1",
  "bgo-2",
  "bgo-3",

  "bgo-5",
  "bgo-6",

  "bga-1",
  "bga-2",
  "bga-3",

  "bga-5",
  "bg-black",
  "bg-rose-900",
  "bg-purple-800",
  "bg-gradient-to-t from-yellow-500 to-pink-500",
  "bg-gradient-to-t from-cyan-600 to-blue-600"
];

export const typeOfQuestions = [
  { title: "Text", type: "text" },
  { title: "Slider", type: "slider" },
  { title: "Picker", type: "picker" }
];

export const sideBarList = [
  {
    icon: "home",
    name: "Dashboard",
    link: "/dashboard",
    help: "Show an overview of your ongoing and completed references and your available forms"
  },
  {
    icon: "inProgress",
    name: "Ongoing",
    link: "/ongoing-references",
    help: "List of current reference that is not or partially filled by reference providers"
  },
  {
    icon: "completed",
    name: "Completed",
    link: "/completed-references",
    help: "List of all the recently completed references "
  },
  {
    icon: "forms",
    name: "Forms",
    link: "/reference-forms",
    help: "List of templates for each reference "
  },
  {
    icon: "tutorial",
    name: "Guides",
    link: "/tutorial",
    help: "Visit our tutorial page for guides"
  },
  {
    icon: "credit",
    name: "Subscribe",
    link: "/credits",
    help: "Addd more credits to your account"
  }
];

export const appSpecs = [
  {
    name: "Emailing references",
    value: "Yes"
  },
  {
    name: "Maximum reference for candidates",
    value: 5
  },
  {
    name: "Generate PDF report",
    value: "Yes"
  },
  {
    name: "Question formats",
    value: "Text, picker, and slider"
  },
  {
    name: "Prebuilt Form Backgrounds",
    value: "20+"
  },
  {
    name: "Realtime Reference Tracking",
    value: "Yes"
  },
  {
    name: "Fiallable form for reference calling",
    value: "Yes"
  },
  {
    name: "Free trial length",
    value: "	30 days"
  },
  {
    name: "Mobile friendly form",
    value: "Yes"
  },
  {
    name: "Cost per candidate",
    value: "$2.50 USD or less"
  },
  {
    name: "Email Reminders",
    value: "One click Reminder"
  },
  {
    name: "Fill out form for phone references",
    value: "Yes"
  },
  {
    name: "Tutorial",
    value: "Yes"
  },
  {
    name: "Upcoming features",
    value: "Automatic reminders, client mobile companitibility"
  }
];

// Used for view account page

export const personalDetailList = [
  {
    property: "firstName",
    label: "First Name"
  },
  {
    property: "lastName",
    label: "Last Name"
  },
  {
    property: "positionTitle",
    label: "Position Title"
  },
  {
    property: "email",
    label: "E-mail"
  },
  {
    property: "phoneNumber",
    label: "Phone Number"
  },
  {
    property: "extension",
    label: "Extension"
  }
];

// Used for view account page

export const companyDetailList = [
  {
    property: "companyName",
    label: "Organization / Company Name"
  },
  {
    property: "CRNumber",
    label: "Charitable / Business Registration Number"
  },
  {
    property: "mStatement",
    label: "Mission Statement"
  }
];

export const frontEndIcons = [
  "HTML",
  "CSS",
  "JAVASCRIPT(ES6)",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "REACT NATIVE",
  "REDUX",
  "TAILWIND",
  "BOOTSTRAP",
  "REACT BOOTSTRAP",
  "SWIFT",
  "C++"
];

export const serverIcons = [
  "NODE JS",
  "EXPRESS",
  "MONGODB",
  "MONGOOSE",
  "PASSPORTJS",
  "FIREBASE"
];

export const toolsIcon = [
  "VSCODE",
  "VISUAL STUDIO",
  "XCODE",
  "UNREAL EDITOR",
  "POSTMAN",
  "BASH",
  "GITHUB",
  "NPM",
  "FIGMA",
  "DRAW",
  "NGROK",
  "GITHUB COPILOT",
  "DOCKER"
];

export const thirdPartyServices = [
  "CLOUDFLARE",
  "QONVERSION",
  "MLKIT",
  "MAILGUN",
  "SENDGRID",
  "STRIPE",
  "HEROKU",
  "AXIOS",
  "MIXPANEL",
  "AGORA",
  "IMGLY"
];

export const observedElements = [
  "#welcome",
  "#apps",
  "#tech-stacks",
  "#work",
  "#education",
  "#experience",
  "#skills"
];
