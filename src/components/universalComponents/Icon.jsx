import {
  FaShapes,
  FaCheckSquare,
  FaUserCircle,
  FaCheck,
  FaListAlt,
  FaUserPlus,
  FaPaperPlane,
  FaWindowClose,
  FaBars,
  FaEye,
  FaEdit,
  FaGoogle,
  FaTrash,
  FaFileAlt,
  FaCircleNotch,
  FaSlidersH,
  FaRegClock,
  FaLaptop,
  FaCreditCard,
  FaRegEdit,
  FaHome,
  FaPlus,
  FaBookOpen,
  FaRegUser,
  FaUserClock,
  FaPlusSquare,
  FaArrowLeft,
  FaFilePdf,
  FaSistrix,
  FaMobileAlt,
  FaRegMoneyBillAlt,
  FaAngleRight,
  FaChartLine,
  FaStar,
  FaAngleDown
} from "react-icons/fa";

const Icon = ({ icon, style }) => {
  switch (icon) {
    case "mobile":
      return <FaMobileAlt className={style} />;
    case "down": // used
      return <FaAngleDown className={style} />;
    case "review":
      return <FaSistrix className={style} />;
    case "pdf":
      return <FaFilePdf className={style} />;
    case "add-square":
      return <FaPlusSquare className={style} />;
    case "home":
      return <FaHome className={style} />;
    case "close":
      return <FaWindowClose className={style} />;
    case "eye":
      return <FaEye className={style} />;
    case "bars":
      return <FaBars className={style} />;
    case "edit":
      return <FaEdit className={style} />;
    case "google":
      return <FaGoogle className={style} />;
    case "delete":
      return <FaTrash className={style} />;
    case "text":
      return <FaFileAlt className={style} />;
    case "back-arrow":
      return <FaArrowLeft className={style} />;
    case "check":
      return <FaCheck className={style} />;
    case "loading":
      return <FaCircleNotch className={style} />;
    case "slider":
      return <FaSlidersH className={style} />;
    case "picker":
      return <FaShapes className={style} />;
    case "add":
      return <FaPlus className={style} />;
    case "add-person":
      return <FaUserPlus className={style} />;
    case "clock":
      return <FaRegClock className={style} />;
    case "money":
      return <FaRegMoneyBillAlt className={style} />;
    case "computer":
      return <FaLaptop className={style} />;
    case "person":
      return <FaRegUser className={style} />;
    case "send":
      return <FaPaperPlane className={style} />;
    case "edit":
      return <FaRegEdit className={style} />;
    case "inProgress":
      return <FaUserClock className={style} />;
    case "completed":
      return <FaCheckSquare className={style} />;
    case "form":
      return <FaListAlt className={style} />;
    case "account":
      return <FaUserCircle className={style} />;
    case "tutorial":
      return <FaBookOpen className={style} />;
    case "credit":
      return <FaCreditCard className={style} />;
    case "credit":
      return <FaCreditCard className={style} />;
    case "next":
      return <FaAngleRight className={style} />;
    case "productivity":
      return <FaChartLine className={style} />;
    case "star":
      return <FaStar className={style} />;

    default:
      return <FaListAlt className={style} />;
  }
};

export default Icon;
