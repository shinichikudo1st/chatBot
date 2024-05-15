const AuthenticationButton = () => {
  return (
    <div className="flex gap-5 absolute right-[3%] top-[2%] z-20">
      <button className=" hover:border-[#a6b6f0] duration-[0.5s] bg-[#1d2b5e] cursor-pointer w-[180px] h-[50px] rounded-[10px] text-xl font-bold border-2 border-green-700 text-white">
        Login
      </button>
      <button className=" hover:border-[#a6b6f0] duration-[0.5s] bg-[#1d2b5e] cursor-pointer w-[180px] h-[50px] rounded-[10px] text-xl font-bold border-2 border-green-700 text-white">
        Signup
      </button>
    </div>
  );
};

export default AuthenticationButton;
