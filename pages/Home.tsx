import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Gift, ArrowRight, Music, BookOpen, Feather } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/id/212/1920/1080" // Placeholder for barge exterior at golden hour
            alt="Word on the Water bookbarge moored at Granary Square, golden hour."
            className="w-full h-full object-cover"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent md:via-navy/40 md:to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-start max-w-5xl">
          <div className="max-w-2xl space-y-6 animate-float" style={{ animationDuration: '8s' }}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight drop-shadow-lg">
              London’s Floating <br/>
              <span className="text-brass italic">Bookshop</span>
            </h1>
            <p className="text-lg md:text-2xl text-cream/90 font-light max-w-xl leading-relaxed drop-shadow-md">
              Step aboard Dianti at Granary Square for handpicked new & used books, poetry, jazz and intimate events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/shop" 
                className="px-8 py-3 bg-oxblood hover:bg-red-900 text-cream font-medium rounded-sm transition-all shadow-lg hover:translate-y-[-2px] text-center"
              >
                Request Any Book
              </Link>
              <Link 
                to="/events" 
                className="px-8 py-3 bg-brass hover:bg-yellow-600 text-navy font-bold rounded-sm transition-all shadow-lg hover:translate-y-[-2px] text-center"
              >
                See Events
              </Link>
              <a 
                href="#visit-us" 
                className="px-8 py-3 border border-cream/50 hover:bg-cream/10 text-cream font-medium rounded-sm transition-all backdrop-blur-sm text-center"
              >
                Visit the Barge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="bg-navy text-cream py-8 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Clock className="text-brass shrink-0" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-brass">Open Daily</h3>
                <p className="text-sm">Midday – 7PM</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <MapPin className="text-brass shrink-0" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-brass">Location</h3>
                <p className="text-sm">Regent’s Canal, King's Cross</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Phone className="text-brass shrink-0" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-brass">Call Us</h3>
                <a href="tel:+447976886982" className="text-sm hover:underline">+44 7976 886 982</a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Gift className="text-brass shrink-0" />
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wide text-brass">Vouchers</h3>
                <Link to="/shop" className="text-sm hover:underline">Online & In-store</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Block */}
      <section className="py-20 bg-paper" id="visit-us">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-brass/20 rounded-sm transform rotate-2 transition-transform group-hover:rotate-1"></div>
               <img 
                src="https://picsum.photos/id/24/800/600" 
                alt="Interior of the bookshop with warm lighting and books everywhere"
                className="relative rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl text-navy">Books, Live Words, and Quiet Canals</h2>
              <p className="text-navy/80 leading-relaxed text-lg">
                Word on the Water started as a tiny idea and a bigger love of books. In 2010 a reclaimed 1920s Dutch barge — now lovingly called <em className="font-serif">Dianti</em> — became a floating bookshop.
              </p>
              <p className="text-navy/80 leading-relaxed">
                Run by a small team of book obsessives, the barge sells carefully chosen new and used books and opens its roof stage for readings, jazz and small gigs. We’re driven by two things: great books and the simple joy of community around the water.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-oxblood font-bold hover:gap-3 transition-all">
                Read our story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Event Card */}
            <div className="bg-paper p-8 rounded-sm shadow-sm border-t-4 border-oxblood hover:shadow-md transition-shadow group">
              <Music className="w-10 h-10 text-oxblood mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl mb-3 text-navy">Live Events</h3>
              <p className="text-navy/70 mb-6">
                From jazz on the roof stage to intimate poetry readings by the woodburner. Our events are small, special, and often sell out.
              </p>
              <Link to="/events" className="text-sm font-bold text-navy uppercase tracking-wide hover:text-oxblood transition-colors">
                View Calendar &rarr;
              </Link>
            </div>

            {/* Shop Card */}
            <div className="bg-paper p-8 rounded-sm shadow-sm border-t-4 border-brass hover:shadow-md transition-shadow group">
              <BookOpen className="w-10 h-10 text-brass mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl mb-3 text-navy">The Collection</h3>
              <p className="text-navy/70 mb-6">
                We stock classics, cult favourites, children's books and art titles. Can't find it? We'll track it down for you.
              </p>
              <Link to="/shop" className="text-sm font-bold text-navy uppercase tracking-wide hover:text-brass transition-colors">
                Browse & Request &rarr;
              </Link>
            </div>

            {/* Writing Group Card */}
            <div className="bg-paper p-8 rounded-sm shadow-sm border-t-4 border-navy hover:shadow-md transition-shadow group">
              <Feather className="w-10 h-10 text-navy mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-2xl mb-3 text-navy">Writing Group</h3>
              <p className="text-navy/70 mb-6">
                "Magic Realism" meets monthly. Join other writers for feedback, craft discussion, and reading by the fire.
              </p>
              <Link to="/writing-group" className="text-sm font-bold text-navy uppercase tracking-wide hover:text-navy/70 transition-colors">
                Join the Group &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;