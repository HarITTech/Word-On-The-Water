import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, ArrowRight } from 'lucide-react';

const categories = [
  { title: 'Staff Picks', desc: "What we're reading right now.", image: 'https://picsum.photos/id/24/400/300' },
  { title: 'New Arrivals', desc: "Fresh off the press (and the boat).", image: 'https://picsum.photos/id/366/400/300' },
  { title: 'Children’s', desc: "Tales for tiny pirates.", image: 'https://picsum.photos/id/119/400/300' },
  { title: 'London & Local', desc: "Canal history and city secrets.", image: 'https://picsum.photos/id/403/400/300' },
  { title: 'Fiction & Classics', desc: "Timeless stories.", image: 'https://picsum.photos/id/259/400/300' },
  { title: 'Gifts', desc: "Beautiful editions for loved ones.", image: 'https://picsum.photos/id/535/400/300' },
];

const Shop: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Shop Hero */}
      <div className="bg-navy text-cream py-16 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">The Floating Bookshop</h1>
        <p className="text-cream/70 mb-8 max-w-xl mx-auto">Browse our curated collections online, or tell us what you're looking for and we'll find it.</p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search for a title, author, or ISBN..." 
            className="w-full py-4 px-6 pl-12 rounded-full text-navy placeholder-navy/40 focus:outline-none focus:ring-2 focus:ring-brass shadow-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy/40" size={20} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy mb-2">{cat.title}</h3>
                <p className="text-sm text-navy/60 mb-4">{cat.desc}</p>
                <span className="inline-flex items-center text-oxblood font-bold text-sm uppercase tracking-wide group-hover:gap-2 transition-all">
                  Browse <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gift Vouchers Info */}
        <div className="bg-oxblood text-cream rounded-sm p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
           <div className="max-w-xl">
             <h3 className="font-serif text-3xl mb-4">Give the Gift of Reading</h3>
             <p className="text-cream/90 text-lg leading-relaxed mb-4">
               Not sure what they'd like? Our vouchers are the perfect solution. Available for use in our physical shop or online via Bookshop.org.
             </p>
             <div className="flex flex-wrap gap-4">
                <a href="https://uk.bookshop.org" target="_blank" rel="noreferrer" className="bg-cream text-oxblood px-6 py-3 font-bold rounded hover:bg-white transition-colors">
                  Buy Online Voucher
                </a>
                <button className="border border-cream text-cream px-6 py-3 font-bold rounded hover:bg-cream/10 transition-colors">
                  Info for In-Store
                </button>
             </div>
           </div>
           <div className="bg-cream/10 p-6 rounded-full">
              <ShoppingBag size={64} className="text-cream" />
           </div>
        </div>

        {/* Request A Book Section */}
        <div className="bg-paper border border-navy/10 rounded-sm p-8 md:p-12 max-w-4xl mx-auto" id="request">
          <div className="text-center mb-10">
            <Heart className="text-oxblood w-12 h-12 mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-3">Can't find it? Request Any Book.</h2>
            <p className="text-navy/60">Tell us the title or author, and we’ll track it down for you. We usually reply within 48 hours.</p>
          </div>

          {requestSent ? (
             <div className="bg-green-50 border border-green-200 text-green-800 p-8 text-center rounded animate-fade-in">
               <h4 className="font-serif text-2xl mb-2">Request Received!</h4>
               <p>Thanks — we’ll hunt it down and email you within 48 hours.</p>
               <button onClick={() => setRequestSent(false)} className="mt-6 text-sm underline hover:text-green-900">
                 Request another book
               </button>
             </div>
          ) : (
            <form onSubmit={handleRequestSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Book Title *</label>
                  <input required type="text" className="w-full bg-white border border-navy/10 rounded p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Author</label>
                  <input type="text" className="w-full bg-white border border-navy/10 rounded p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Your Name *</label>
                  <input required type="text" className="w-full bg-white border border-navy/10 rounded p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Email Address *</label>
                  <input required type="email" className="w-full bg-white border border-navy/10 rounded p-3 focus:outline-none focus:border-navy transition-colors" />
                </div>
              </div>

              <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Additional Notes (Edition, Hardback, etc)</label>
                  <textarea className="w-full bg-white border border-navy/10 rounded p-3 h-24 focus:outline-none focus:border-navy transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-navy text-cream font-bold text-lg py-4 rounded hover:bg-navy/90 transition-colors shadow-lg">
                Send Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;