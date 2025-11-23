import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Can I bring a dog?",
    a: "Friendly dogs are very welcome! We have our own ship dogs too. Please just keep them on a lead while on board."
  },
  {
    q: "How long does delivery take?",
    a: "UK delivery is usually ~48 hours for online orders via our Bookshop.org page. Special requests tracked down by us may take a little longer."
  },
  {
    q: "Can I hire the barge for events?",
    a: "Yes — but small events only. We host book launches, poetry nights, and tiny gigs. Use the Enquire form on the Events page for availability and pricing."
  },
  {
    q: "Do you sell gift vouchers?",
    a: "Yes! You can buy them online via Bookshop.org (for online use) or pop into the shop to buy a physical voucher for in-store use."
  },
  {
    q: "Is the barge wheelchair accessible?",
    a: "Accessibility is unfortunately limited due to the historic nature of the boat structure (steep steps, narrow gangway). However, we are eager to help where possible — please contact us in advance so we can assist with book browsing from the towpath or discuss specific needs."
  },
  {
    q: "Are you open on Bank Holidays?",
    a: "We are generally open every day from Midday to 7PM, including Bank Holidays. The only day we definitely close is Christmas Day."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-paper min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-4xl text-navy mb-12 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-navy/10 rounded-sm bg-white overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream/20 transition-colors focus:outline-none"
              >
                <span className="font-serif text-lg text-navy font-medium">{item.q}</span>
                {openIndex === idx ? <Minus size={20} className="text-oxblood" /> : <Plus size={20} className="text-brass" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-navy/70 leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;