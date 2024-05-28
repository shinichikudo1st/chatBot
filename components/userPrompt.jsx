const UserPrompt = ({ handleKeyDown }) => {
  return (
    <div className="absolute bottom-[3%] right-[17%] w-[55%] h-[58vh] bg-slate-900 rounded-[10px] p-10 overflow-auto">
      <div className="font-bold text-[#f2f4fc] flex flex-col gap-10">
        <span className="text-lg">
          Explore the space beyond Earth! Ask Questions no humans dared to even
          asked
        </span>
        <form className="bg-transparent border-[0px] rounded-[5px] outline-none font-normal h-[150px]">
          <textarea
            name=""
            id="prompt"
            placeholder="Write your prompt here..."
            onKeyDown={handleKeyDown}
            className="w-[90%] h-[65px] bg-transparent outline-none p-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 resize-none absolute bottom-4"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default UserPrompt;
