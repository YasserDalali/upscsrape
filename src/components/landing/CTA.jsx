
export default function CTA() {
  return (
<div className=" adjust w-full pb-10 px-4 sm:px-6 lg:px-8 md:pb-20">
  <div className=" relative rounded-xl p-5 sm:py-16 before:absolute before:top-0 before:start-0 
  before:bg-[url('https://www.preline.co/assets/svg/component-dark/banner-bg.svg')]
   before:bg-no-repeat before:bg-top before:bg-contain before:w-2/3 before:h-full before:z-0 bg-neutral-950">
    <div className="max-w-xl relative z-10 text-center mx-auto">
      <div className="mb-5">
        <h2 className="text-2xl font-bold md:text-3xl text-white">Subscribe</h2>
        <p className="mt-3 text-neutral-400">Get all the latest UpScrape updates and news.</p>
      </div>
      {/* Begin Mailchimp Signup Form */}
      <div id="mc_embed_signup">
        <form action="https://praline.us10.list-manage.com/subscribe/post?u=eddd28397383718c2f15e15c2&id=b97f8fe839" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="novalidate">
          <div id="mc_embed_signup_scroll">
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email"  name="EMAIL" id="mce-EMAIL" className="block w-full rounded-lg text-sm 
              focus:border-main focus:ring-main disabled:opacity-50 disabled:pointer-events-none bg-transparent border-neutral-100 text-neutral-400 placeholder-neutral-200 focus:ring-neutral-200 placeholder:text-neutral-400" placeholder="Email address" />
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="py-3 px-4 rounded-xl inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-transparent bg-main text-white hover:bg-main focus:outline-none focus:bg-main disabled:opacity-50 disabled:pointer-events-none" />
            </div>
            <div id="mce-responses" className="mt-3 text-neutral-400">
              <div className="response" id="mce-error-response" style={{display: 'none'}} />
              <div className="response" id="mce-success-response" style={{display: 'none'}} />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden=""><input type="text" name="b_eddd28397383718c2f15e15c2_b97f8fe839" tabIndex={-1} defaultValue /></div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </div>
  </div>
</div>

  )
}
