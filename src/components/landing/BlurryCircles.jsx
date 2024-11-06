function BlurryCircles() {
  return (
    <>
      <div className="-z-10 absolute top-20 -left-44 
      w-[10rem] h-[10rem] lg:w-[40rem] lg:h-[40rem]  
      
      bg-green-500 rounded-full mix-blend-soft-light opacity-40 lg:opacity-80 filter blur-2xl animate-blob"></div>
      <div
        className="-z-10 absolute bottom-64 -right-20 
        w-[10rem] h-[10rem] lg:w-[40rem] lg:h-[40rem] 

      bg-green-500 rounded-full mix-blend-soft-light opacity-60 lg:opacity-80 filter blur-2xl  animate-blob"
      ></div>
    </>
  );
}

export default BlurryCircles;
