import React from 'react';
import { Calendar, Music, Mic, Users, ExternalLink } from 'lucide-react';

// Mock data
const events = [
  { 
    date: { day: '15', month: 'OCT' },
    title: 'Jazz on the Water: The Blue Notes',
    time: '7:30 PM',
    type: 'Music',
    desc: 'An intimate evening of smooth jazz on the barge roof. Small capacity — book early.',
    status: 'Available'
  },
  { 
    date: { day: '22', month: 'OCT' },
    title: 'Poetry & Wine: Local Voices',
    time: '6:00 PM',
    type: 'Poetry',
    desc: 'Three local poets share their latest work. Mulled wine included in ticket price.',
    status: 'Sold Out'
  },
  { 
    date: { day: '05', month: 'NOV' },
    title: 'Book Launch: "River Deep"',
    time: '7:00 PM',
    type: 'Launch',
    desc: 'Join author Sarah Jenkins for the launch of her new canal-side thriller.',
    status: 'Available'
  }
];

const Events: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Events Hero */}
      <div className="bg-navy text-cream py-20 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
         <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-6xl mb-4">Live words, music, and small-scale gigs</h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Our rooftop stage and cozy interior host some of London's most atmospheric small events.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Events List */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-serif text-3xl text-navy border-b border-navy/10 pb-4">Upcoming Events</h2>
            
            <div className="space-y-6">
              {events.map((event, idx) => (
                <div key={idx} className="flex flex-col md:flex-row bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-navy/5">
                  {/* Date Box */}
                  <div className="bg-navy text-cream p-6 flex flex-col items-center justify-center min-w-[120px]">
                    <span className="text-3xl font-serif font-bold">{event.date.day}</span>
                    <span className="text-sm uppercase tracking-widest text-brass">{event.date.month}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase tracking-wide text-oxblood flex items-center gap-1">
                          {event.type === 'Music' && <Music size={14} />}
                          {event.type === 'Poetry' && <Mic size={14} />}
                          {event.type === 'Launch' && <Users size={14} />}
                          {event.type}
                        </span>
                        <span className="text-sm text-navy/50 font-medium">{event.time}</span>
                      </div>
                      <h3 className="font-serif text-xl text-navy mb-2">{event.title}</h3>
                      <p className="text-navy/70 text-sm mb-4">{event.desc}</p>
                    </div>
                    
                    <div className="flex justify-end">
                       {event.status === 'Sold Out' ? (
                         <span className="bg-gray-100 text-gray-400 px-4 py-2 text-sm font-bold rounded cursor-not-allowed">Sold Out</span>
                       ) : (
                         <button className="bg-brass hover:bg-yellow-600 text-navy px-6 py-2 text-sm font-bold rounded transition-colors shadow-sm">
                           Get Tickets
                         </button>
                       )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center pt-8">
              <button className="text-navy font-bold underline hover:text-oxblood transition-colors">Load more events</button>
            </div>
          </div>

          {/* Right Column: Hire Info */}
          <div className="lg:col-span-1">
             <div className="bg-paper p-8 rounded-sm shadow-sm border-t-4 border-oxblood sticky top-24">
               <h3 className="font-serif text-2xl text-navy mb-4">Hire the Barge</h3>
               <p className="text-navy/70 mb-6 text-sm leading-relaxed">
                 Small, atmospheric venue with stage on the roof, PA and solar sound. Ideal for launches, readings and tiny concerts.
               </p>
               
               <ul className="space-y-4 mb-8 text-sm text-navy/80">
                 <li className="flex items-start gap-3">
                   <div className="bg-oxblood/10 p-1 rounded text-oxblood"><Users size={16} /></div>
                   <span>Capacity: Approx. 40-80 (standing/mixed)</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="bg-oxblood/10 p-1 rounded text-oxblood"><Mic size={16} /></div>
                   <span>Full PA & Solar Sound System</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="bg-oxblood/10 p-1 rounded text-oxblood"><Calendar size={16} /></div>
                   <span>Available evenings (post 7PM)</span>
                 </li>
               </ul>

               <h4 className="font-bold text-navy text-sm mb-2">For Promoters:</h4>
               <p className="text-xs text-navy/60 mb-6">We programme poetry, jazz, launches — send a short pitch and sample audio/links.</p>

               <a href="#contact" className="block w-full bg-navy text-cream text-center py-3 rounded font-bold hover:bg-navy/90 transition-colors">
                 Enquire About Hire
               </a>
               <p className="text-center text-xs text-navy/40 mt-3">We'll respond within 3 business days.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;