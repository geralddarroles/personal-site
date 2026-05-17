import { MdInfoOutline } from "react-icons/md";

const ToolTip = ({ description }) => {
  return (
    <div className="relative z-30 flex flex-row rounded-xl group ">
      <MdInfoOutline className="text-lg text-purple-800" />
      <p className="absolute w-64 p-2 ml-6 text-lg text-gray-600 transition-all duration-100 origin-left scale-0 bg-yellow-100 rounded-md shadow-md group-hover:scale-100">
        {description}
      </p>
    </div>
  );
};

export default ToolTip;
