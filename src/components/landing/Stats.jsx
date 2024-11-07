
function Stats() {
  return (
<div>{/* Features */}
  <div className=" adjust">
    {/* Grid */}
    <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
      <div className="lg:col-span-4">
        {/* Stats */}
        <div className="lg:pe-6 xl:pe-12">
          <p className="text-6xl font-bold leading-10 text-main">
            92%
           
          </p>
          <p className="mt-2 sm:mt-3 text-gray-300">of U.S. adults have bought from businesses using Space</p>
        </div>
        {/* End Stats */}
      </div>
      {/* End Col */}
      <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-neutral-700">
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
          {/* Stats */}
          <div>
            <p className="text-3xl font-semibold text-main">99.95%</p>
            <p className="mt-1 text-gray-300">in fulfilling orders</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <p className="text-3xl font-semibold text-main">2,000+</p>
            <p className="mt-1 text-gray-300">partner with Preline</p>
          </div>
          {/* End Stats */}
          {/* Stats */}
          <div>
            <p className="text-3xl font-semibold text-main">85%</p>
            <p className="mt-1 text-gray-300">this year alone</p>
          </div>
          {/* End Stats */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Features */}


    
  
  </div>

  )
}

export default Stats