import { Link } from "react-router-dom"

function NavBar() {
  return (
<div className="z-50">{/* ========== HEADER ========== */}
  <header className="fixed top-2 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
    <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/agency/index.html" aria-label="Preline">
            <h1 className="text-white">UpScrape <span className="text-white bg-main px-2 py-1 rounded-xl opacity-80 text-sm">beta</span></h1> 
        </a>
        {/* End Logo */}
        <div className="md:hidden">
          <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-floating-dark-collapse" aria-expanded="false" aria-controls="hs-navbar-floating-dark" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-floating-dark">
            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} x2={21} y1={6} y2={6} /><line x1={3} x2={21} y1={12} y2={12} /><line x1={3} x2={21} y1={18} y2={18} /></svg>
            <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
      </div>
      {/* Collapse */}
      <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
        <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
          <a className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="../templates/agency/index.html" aria-current="page">Home</a>
          <a className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Stories</a>
          <a className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Reviews</a>
          <a className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">Approach</a>
          <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] p-3 ps-px sm:px-3 md:py-4">
            <button id="hs-dropdown-floating-dark" type="button" className="hs-dropdown-toggle flex items-center w-full text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              About
              <svg className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 ms-auto md:ms-1 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-floating-dark">
              <div className="py-1 md:px-1 space-y-1">
                <a className="flex items-center gap-x-3.5 py-2 md:px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">
                  About
                </a>
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                  <button id="hs-dropdown-floating-dark-sub" type="button" className="hs-dropdown-toggle w-full flex justify-between items-center py-2 md:px-3 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    Sub Menu
                    <svg className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg before:absolute before:-end-5 before:top-0 before:h-full before:w-5 !mx-[10px] top-0 end-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-floating-dark-sub">
                    <div className="py-1 md:px-1 space-y-1">
                      <a className="flex items-center gap-x-3.5 py-2 md:px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">
                        About
                      </a>
                      <a className="flex items-center gap-x-3.5 py-2 md:px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">
                        Downloads
                      </a>
                      <a className="flex items-center gap-x-3.5 py-2 md:px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">
                        Team Account
                      </a>
                    </div>
                  </div>
                </div>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">
                  Downloads
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300" href="#">
                  Team Account
                </a>
              </div>
            </div>
          </div>
          <div>
            <Link to="/register" className="group inline-flex items-center gap-x-2 py-2 px-3 bg-main font-medium text-sm text-white rounded-full focus:outline-none" href="../templates/agency/index.html#contact">
              Get started!
            </Link>
          </div>
        </div>
      </div>
      {/* End Collapse */}
    </nav>
  </header>
  {/* ========== END HEADER ========== */}</div>

  )
}

export default NavBar