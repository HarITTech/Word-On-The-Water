import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const timelineData = [
  { year: '2010', event: 'Founded', value: 1 },
  { year: '2012', event: 'Canal Roving', value: 2 },
  { year: '2015', event: 'Granary Sq', value: 3 },
  { year: '2017', event: 'Refurbished', value: 4 },
  { year: '2020', event: 'Roof Stage', value: 5 },
  { year: 'Now', event: 'Community', value: 6 },
];

const About: React.FC = () => {
  return (
    <div className="w-full bg-paper min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy text-cream py-20">
        <div className="container mx-auto px-6 text-center">
           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">How a barge became a bookshop</h1>
           <p className="max-w-2xl mx-auto text-lg text-cream/80 font-light">
             The story of Dianti, the crew, and the canal.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Main Narrative */}
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-navy/80">
            <p className="drop-cap font-serif text-xl">
              <span className="float-left text-6xl font-serif text-oxblood pr-3 pt-2 leading-none">W</span>
              ord on the Water started as a tiny idea and a bigger love of books. In 2010 a reclaimed 1920s Dutch barge — now lovingly called <strong>Dianti</strong> — became a floating bookshop, moving along London’s canals until it found a permanent home at Granary Square.
            </p>
            <p>
              Run by a small team of book obsessives, the barge sells carefully chosen new and used books and opens its roof stage for readings, jazz and small gigs. We’re driven by two things: great books and the simple joy of community around the water.
            </p>
            <p>
              Over the years, we've weathered storms, licensing battles, and the changing face of King's Cross. Through it all, the support of locals and visitors has kept us afloat (literally and metaphorically). Today, Dianti is more than a shop; it's a landmark, a stage, and a quiet corner in a busy city.
            </p>

            <div className="my-10 p-6 bg-cream border-l-4 border-brass italic text-navy/90 font-serif text-xl">
              "There is nothing – absolutely nothing – half so much worth doing as simply messing about in boats... with books."
            </div>

            <h2 className="font-serif text-3xl text-navy mt-12 mb-6">The Timeline</h2>
            <div className="h-64 w-full bg-white p-4 rounded-sm shadow-inner">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={timelineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                   <XAxis dataKey="year" tick={{fontSize: 12, fill: '#0B2540'}} stroke="#0B2540" />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#F7EFE6', border: '1px solid #C99B59', fontFamily: 'serif' }}
                      cursor={{fill: 'transparent'}}
                   />
                   <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {timelineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#0B2540' : '#7B2C2C'} />
                      ))}
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
               <p className="text-center text-xs text-navy/50 mt-2">A visual journey of our growth along the canal.</p>
            </div>
          </div>

          {/* Sidebar: Founders & Boat */}
          <div className="md:col-span-5 space-y-12">
            
            {/* The Boat */}
            <div className="bg-cream p-6 rounded-sm shadow-sm">
              <h3 className="font-serif text-2xl text-navy mb-4">The Vessel: Dianti</h3>
              <img 
                src="https://picsum.photos/id/433/600/400" 
                alt="The barge Dianti profile view" 
                className="w-full h-48 object-cover rounded-sm mb-4 grayscale hover:grayscale-0 transition-all"
              />
              <p className="text-sm text-navy/70 mb-2"><strong>Type:</strong> 1920s Dutch Barge</p>
              <p className="text-sm text-navy/70 mb-2"><strong>Length:</strong> 50ft (approx)</p>
              <p className="text-sm text-navy/70"><strong>Special Features:</strong> Woodburning stove, rooftop stage, solar-powered sound system.</p>
            </div>

            {/* The Team */}
            <div>
              <h3 className="font-serif text-2xl text-navy mb-6">The Crew</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <img src="https://picsum.photos/id/1005/100/100" alt="Paddy Screech" className="w-16 h-16 rounded-full object-cover border-2 border-brass" />
                  <div>
                    <h4 className="font-bold text-navy">Paddy Screech</h4>
                    <p className="text-xs text-oxblood uppercase tracking-wider mb-1">Co-Founder</p>
                    <p className="text-sm text-navy/70">The voice on the phone. Lover of classics and good conversation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img src="https://picsum.photos/id/1012/100/100" alt="Jon Privett" className="w-16 h-16 rounded-full object-cover border-2 border-navy" />
                  <div>
                    <h4 className="font-bold text-navy">Jon Privett</h4>
                    <p className="text-xs text-oxblood uppercase tracking-wider mb-1">Co-Founder</p>
                    <p className="text-sm text-navy/70">The visionary behind the bookbarge concept. Always recommending the unexpected.</p>
                  </div>
                </div>
                 <div className="flex gap-4 items-start">
                  <img src="https://picsum.photos/id/1025/100/100" alt="Stephane Chaudat" className="w-16 h-16 rounded-full object-cover border-2 border-navy" />
                  <div>
                    <h4 className="font-bold text-navy">Stephane Chaudat</h4>
                    <p className="text-xs text-oxblood uppercase tracking-wider mb-1">Co-Founder</p>
                    <p className="text-sm text-navy/70">Keeping the ship sailing smooth and the coffee brewing.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-navy/50 mt-6 italic">Plus a tiny crew of booksellers, stage hands and very friendly dogs.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;