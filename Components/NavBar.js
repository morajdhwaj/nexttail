function NavBar() {
  return (
    <div className="bg-black text-main bg-opacity-30 py-5 fixed left-0 right-0 top-0 ">
      <div className=" flex justify-between  items-center px-10 ">
        <div className="flex items-center space-x-6 flex-wrap ">
          <h1 className="text-white font-bold font-inter text-xl">codebase</h1>
          <ul className="flex font-semibold space-x-10">
            <li className="  ">Support</li>
            <li className="  ">Product</li>
            <li className="  ">Company</li>
            <li className="  ">Account</li>
          </ul>
        </div>
        <button className=" text-white bg-blue-700   rounded-full py-1 px-4">
          Buy Template{" "}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
