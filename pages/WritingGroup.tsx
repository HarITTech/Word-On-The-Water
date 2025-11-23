import React from 'react';
import { Feather, Calendar, Mail } from 'lucide-react';

const WritingGroup: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        
        <div className="text-center mb-16">
          <Feather className="w-16 h-16 text-navy mx-auto mb-6 animate-pulse" style={{animationDuration: '3s'}} />
          <h1 className="font-serif text-4xl md:text-6xl text-navy mb-4">Magic Realism</h1>
          <h2 className="text-xl md:text-2xl text-oxblood font-serif italic mb-6">Creative Writing Group</h2>
          <p className="text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Meet other writers for feedback and reading by the fire on the towpath. Monthly sessions focusing on strange fiction, craft and short readings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <div className="order-2 md:order-1 space-y-6">
              <h3 className="font-serif text-2xl text-navy">What to expect</h3>
              <ul className="space-y-4 text-navy/80">
                <li className="flex gap-3">
                  <span className="text-brass font-serif text-xl">01.</span>
                  <span><strong>Friendly Feedback:</strong> Bring a piece you're working on (under 1000 words) for constructive, kind critique.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass font-serif text-xl">02.</span>
                  <span><strong>Prompt Exercises:</strong> We start every session with a 15-minute free-write based on a weird or wonderful prompt.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brass font-serif text-xl">03.</span>
                  <span><strong>Atmosphere:</strong> There is no better place to write than a boat rocking gently on the canal.</span>
                </li>
              </ul>
           </div>
           <div className="order-1 md:order-2">
             <div className="relative">
                <div className="absolute inset-0 border-2 border-brass transform translate-x-4 translate-y-4 rounded-sm"></div>
                <img 
                  src="https://picsum.photos/id/453/600/600" 
                  alt="Notebook and pen on a wooden table inside the barge" 
                  className="relative w-full h-auto rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
           </div>
        </div>

        {/* Sign Up Section */}
        <div className="bg-navy text-cream rounded-sm p-8 md:p-16 text-center relative overflow-hidden">
           <div className="relative z-10">
             <Calendar className="w-10 h-10 text-brass mx-auto mb-4" />
             <h3 className="font-serif text-3xl mb-2">Join the Group</h3>
             <p className="text-cream/70 mb-8">Sign up to get notified about the next session date and theme.</p>
             
             <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
               <div className="flex-grow relative">
                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy/40" size={18} />
                 <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full py-3 pl-10 pr-4 rounded text-navy focus:outline-none focus:ring-2 focus:ring-brass"
                 />
               </div>
               <button className="bg-brass text-navy font-bold py-3 px-8 rounded hover:bg-yellow-600 transition-colors whitespace-nowrap">
                 Sign Up
               </button>
             </form>
             <p className="text-xs text-cream/40 mt-4">We respect your inbox. No spam, just invites.</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default WritingGroup;