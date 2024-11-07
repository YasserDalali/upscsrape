function Faq() {
  const faqItems = [
    {
      question: "Do I have to share access of my UpWork account?",
      answer: "No. you only have to specify a public link to the account. All your data is left intact without any risk to your account."
    },
    {
      question: "Can I cancel at anytime?",
      answer: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."
    },
    {
      question: "How does UpScrape's pricing work?",
      answer: "We have a one-time fee of $30. You pay once and you can use UpScrape for as long as you want. We will never charge you again."
    },
    {
      question: "What if I have a question or need help?",
      answer: "We have a dedicated support team that is available to help you with any questions or issues you may have. You can contact us through our website or email us directly."
    },
    {
      question: "How does UpScrape protect my data?",
      answer: "Protecting the data you trust to UpScrape is our first priority. We use SSL encryption and other security measures to protect your data from unauthorized access."
    }
  ];

  return (
    <div className="adjust">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className=" mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">You might be wondering...</h2>
        </div>
        <div className=" mx-auto divide-y divide-neutral-700">
          {faqItems.map((item, index) => (
            <div key={index} className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg className="shrink-0 mt-1 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="md:text-lg font-semibold text-neutral-200">{item.question}</h3>
                  <p className="mt-1 text-neutral-500">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
