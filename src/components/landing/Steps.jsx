import { Link } from "react-router-dom"

function Steps() {
  return (
<div>{/* Approach */}
  <div className="adjust">
    {/* Approach */}
    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
      {/* Title */}
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Get started!</h2>
        <p className="mt-1 text-neutral-400">This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.</p>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
        <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
          <img className="w-full object-cover rounded-xl" src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/64d5fac72a3fc501921e1c56_administrative-professionals.jpg" alt="Features Image" />
        </div>
        {/* End Col */}
        {/* Timeline */}
        <div>
          {/* Heading */}
          <div className="mb-4">
            <h3 className="text-main text-xs font-medium uppercase">
              Steps
            </h3>
          </div>
          {/* End Heading */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-white text-main font-semibold text-xs uppercase rounded-full">
                  1
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-2xl  lg:text-3xl font-bold text-neutral-400">
                <span className="text-white">Install our extension: </span>
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-white text-main font-semibold text-xs uppercase rounded-full">
                  2
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
              <p className="text-2xl  lg:text-3xl font-bold text-neutral-400">
                <span className="text-white">Upload your Profile:</span>
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-white text-main font-semibold text-xs uppercase rounded-full">
                  3
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-2xl  lg:text-3xl font-bold text-neutral-400">
                <span className="text-white">Authentificate with your key: </span>
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          {/* Item */}
          <div className="flex gap-x-5 ms-1">
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-white">
              <div className="relative z-10 size-8 flex justify-center items-center">
                <span className="flex shrink-0 justify-center items-center size-8 border border-white text-main font-semibold text-xs uppercase rounded-full">
                  4
                </span>
              </div>
            </div>
            {/* End Icon */}
            {/* Right Content */}
            <div className="grow pt-0.5 pb-8 sm:pb-12">
            <p className="text-2xl  lg:text-3xl font-bold text-neutral-400">
                <span className="text-white">Start proposing: </span>
              </p>
            </div>
            {/* End Right Content */}
          </div>
          {/* End Item */}
          <Link to="/register" className=" group inline-flex items-center gap-x-2 py-2 px-3 bg-main font-medium text-sm text-white rounded-full focus:outline-none" href="#">
            Start now!
          </Link>
        </div>
        {/* End Timeline */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Approach */}</div>

  )
}

export default Steps