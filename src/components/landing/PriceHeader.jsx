
function PriceHeader() {
  return (
    <div className="relative adjust">

  <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10">
      <h2 className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-green-500 to-green-700 text-transparent">Simple, transparent pricing</h2>
      <p className="mt-2 lg:text-lg  text-neutral-200">Whatever your status, our offers evolve according to your needs.</p>
    </div>
    {/* End Title */}
    
    {/* Grid */}
    <div className="mt-6 md:mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
      {/* Card */}
      <div className="hover:scale-105 cursor-pointer transition-all flex flex-col  bg-opacity-100
       border border-gray-200 text-center rounded-2xl p-4 md:p-8 bg-neutral-900 ">
        <h4 className="font-medium text-lg  text-neutral-200">Free</h4>
        <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-100 ">Free</span>
        <p className="mt-2 text-sm  text-neutral-500">Get started with basic features</p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              1 user
            </span>
          </li>
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              Plan features
            </span>
          </li>
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              Product support
            </span>
          </li>
        </ul>
        <a className="bg-opacity-100 rounded-xl mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-green-600  hover:border-green-500 focus:outline-none focus:border-green-500 focus:text-green-500 disabled:opacity-50 disabled:pointer-events-none  text-green-500 hover:text-green-400" href="#">
          Get started
        </a>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="hover:scale-105 cursor-pointer transition-all flex flex-col  bg-opacity-30
       border-2  text-center shadow-xl rounded-2xl p-4 md:p-8 bg-neutral-900 border-green-700">
        <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold  text-green-500 bg-green-900 bg-opacity-30
        ">Most popular</span></p>
        <h4 className="font-medium text-lg text-gray-100 ">Startup</h4>
        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-100 ">
          $39
        </span>
        <p className="mt-2 text-sm text-gray-500 ">All the basics for starting a new business</p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              2 users
            </span>
          </li>
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              Plan features
            </span>
          </li>
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              Product support
            </span>
          </li>
        </ul>
        <a className="bg-opacity-100 rounded-xl mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium  border border-transparent bg-green-600 text-black
         hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html">
          Get started
        </a>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="hover:scale-105 cursor-pointer transition-all flex flex-col bg-opacity-30
       border border-gray-200 text-center rounded-2xl p-4 md:p-8 bg-neutral-900 ">
        <h4 className="font-medium text-lg text-gray-100">Team</h4>
        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-100 ">
          $89
        </span>
        <p className="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>
        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              5 users
            </span>
          </li>
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              Plan features
            </span>
          </li>
          <li className="flex gap-x-2">
            <svg className="shrink-0 mt-0.5 size-4 text-green-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span className="text-gray-100 ">
              Product support
            </span>
          </li>
        </ul>
        <a className="bg-opacity-100 rounded-xl mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-green-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-green-500 hover:text-green-400 hover:border-green-400 focus:text-green-400 focus:border-green-400" href="#">
          Get started
        </a>
      </div>
      {/* End Card */}
      
    </div>
    {/* End Grid */}
    {/* Title */}
    <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
      <h2 className=" text-neutral-400">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
    </div>
    {/* End Title */}
    {/* Clients */}
    <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
      <svg className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500 " enableBackground="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg"><path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z" fill="currentColor" /></svg>
      <svg className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500 " xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width={2500} height={607}><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor" /></svg>

      <svg className="size-16 md:size-20 lg:size-24 mx-auto sm:mx-0 text-gray-500" viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg" width={2500} height={610}><path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836" fill="currentColor" /></svg>
    </div>
    {/* End Clients */}
  </div>
  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed rounded-full border-green-700/60" />
  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed rounded-full opacity-80 border-green-700/60" />
  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed rounded-full opacity-60 border-green-700/60" />
  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed rounded-full opacity-40 border-green-700/60" />
</div>
  )
}

export default PriceHeader