function BlurryCircles() {
  return (
    <>
      <div className="-z-10 absolute bottom-20 left-44 hidden  sm:inline
      w-[10rem] h-[10rem] lg:w-[45rem] lg:h-[45rem]  
      
      bg-green-500 rounded-full mix-blend-soft-light opacity-40 lg:opacity-15 filter blur-2xl sm:animate-blob"></div>


      <div
        className="-z-10 absolute bottom-64 right-44  hidden  sm:inline
        w-[12rem] h-[12rem] lg:w-[45rem] lg:h-[45rem]
      bg-green-500 rounded-full mix-blend-soft-light opacity-60 lg:opacity-20 filter blur-2xl  sm:animate-blob2"
      ></div>
    </>
  );
}

export default BlurryCircles;
