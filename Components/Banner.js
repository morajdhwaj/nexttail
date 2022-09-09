function Banner() {
  return (
    <>
      <div className="w-2/3  mx-auto pt-20 m-5 pb-10">
        <h1 className=" text-main text-center  font-bold text-7xl font-sans ">
          <span>The site you want. Without the </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-500 to-red-400">
            dev time
          </span>
        </h1>
      </div>
      <div className="border border-gray-700 w-3/6 h-96 mx-auto rounded-t-lg overflow-hidden pb-10">
        <div className="h-10 w-full border border-gray-700 flex items-center pl-5 ">
          <button className="bg-red-500 text-transparent rounded-full h-4 w-4 mx-1 "></button>
          <button className="bg-yellow-500 text-transparent rounded-full h-4 w-4 mx-1 "></button>
          <button className="bg-green-500 text-transparent rounded-full h-4 w-4 mx-1"></button>
        </div>
      </div>
      <div className="font-inter text-center">
        <p className=" py-7 mt-10 font-bold text-main"> Set up in a minutes, then customize to fit your style</p>
        <button className="bg-blue-700 rounded-full py-2 px-3 text-xl font-bold text-white  my-5 ">Download for mac</button>
    </div>
    </>
  );
}

export default Banner;
