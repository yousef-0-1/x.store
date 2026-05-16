export const ProductFAQs = () => {
  return (
    <section>
      <div className="container flex flex-col lg:grid lg:grid-cols-2 gap-3">
        {[
          {
            q: "What is your return policy?",
            a: "We offer a 30-day return policy on all items.",
          },
          {
            q: "How long does shipping take?",
            a: "Standard shipping takes 5-7 business days.",
          },
          {
            q: "Do you ship internationally?",
            a: "Yes, we ship to over 50 countries worldwide.",
          },
          {
            q: "How do I track my order?",
            a: "You will receive a tracking link via email once your order ships.",
          },
        ].map((faq, index) => (
          <div key={index} className="p-5 bg-[#f0f0f0] rounded-2xl">
            <h4 className="font-bold text-lg">{faq.q}</h4>
            <p className="text-gray-600 mt-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
