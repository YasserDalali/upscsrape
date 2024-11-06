import Review from "./Review"

function Reviews() {
  return (
<div className="relative overflow-hidden h-fit">{/* Testimonials */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <Review name="John Doe" position="Freelancer" review="I was hesitant to pay for a service that I wasn't sure would work, but I'm glad I took the chance. UpScrape has been a game-changer for my business. I've been able to find more clients and increase my earnings." company="Upwork"/>
        <Review name="Jane Smith" position="Freelancer" review="I was impressed with how easy it was to use UpScrape. The UI is user-friendly and the instructions are clear. I was able to find relevant projects in no time." company="Upwork"/>
        <Review name="Bob Johnson" position="Client" review="I was looking for a freelancer to help me with a project, but I was having trouble finding the right person. UpScrape made it easy for me to find qualified freelancers who were interested in my project. I was able to find the perfect freelancer for my project and I'm very happy with the results." company="Upwork"/>

    </div>
    {/* End Grid */}
  </div>
  
  {/* End Testimonials */}
  
  <svg className="absolute -bottom-40 -left-36 w-[1900px] " width={2745} height={488} viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-700/50" stroke="currentColor" />
      <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-700/50" stroke="currentColor" />
    </svg>

  </div>

  )
}

export default Reviews