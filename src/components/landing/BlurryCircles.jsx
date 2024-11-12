function BlurryCircles() {
  return (
    <>
      <div className="-z-10 absolute bottom-20 left-44   inline
      w-[30rem] h-[30rem] opacity-15 md:opacity-30 lg:w-[45rem] lg:h-[45rem]  
      
      bg-green-500 rounded-full mix-blend-soft-light lg:opacity-15 filter blur-2xl animate-blob"></div>


      <div
        className="-z-10 absolute bottom-64 right-44    inline
        lg:w-[45rem] lg:h-[45rem] w-[30rem] h-[30rem] opacity-15 md:opacity-30
      bg-green-500 rounded-full mix-blend-soft-light  lg:opacity-20 filter blur-2xl  animate-blob2"
      ></div>
    </>
  );
}

export default BlurryCircles;
