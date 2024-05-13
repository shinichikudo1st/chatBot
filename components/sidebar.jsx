import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className=" absolute h-[100%] w-[18%] bg-[#1d2b5e] z-10 pl-10 pt-10 flex flex-col gap-20 border-r-2 border-[#121a38] left-0 top-0">
      <IoMdMenu size={45} className=" cursor-pointer text-[#F4FBF1]" />
      <div className="flex gap-4 ml-1 bg-[#0f1733] w-[250px] p-3 rounded-[20px] cursor-pointer">
        <FaPlus size={40} className=" text-[#F4FBF1]" />
        <span className="text-[#F4FBF1] font-medium text-center text-lg w-[130px] p-2">
          New Prompt
        </span>
      </div>
      <span className="text-[#F4FBF1] font-medium text-xl ml-2">Recent</span>
    </aside>
  );
};

export default Sidebar;
