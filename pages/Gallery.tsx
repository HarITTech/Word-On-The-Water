import React from 'react';

const images = [
  { url: 'https://picsum.photos/id/212/800/600', alt: 'Word on the Water bookbarge moored at Granary Square at sunset.', size: 'large' },
  { url: 'https://picsum.photos/id/24/400/400', alt: 'Stacked wooden shelves and books inside Word on the Water.', size: 'small' },
  { url: 'https://picsum.photos/id/433/400/400', alt: 'Paddy Screech, co-founder, smiling on the towpath.', size: 'small' },
  { url: 'https://picsum.photos/id/452/800/600', alt: 'Rooftop stage lit with string lights during an evening reading.', size: 'large' },
  { url: 'https://picsum.photos/id/366/400/600', alt: 'Close up of vintage book spines.', size: 'tall' },
  { url: 'https://picsum.photos/id/338/400/300', alt: 'Musicians playing jazz on the roof.', size: 'small' },
  { url: 'https://picsum.photos/id/180/400/300', alt: 'The woodburner inside on a cold day.', size: 'small' },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <h1 className="font-serif text-4xl text-navy mb-4">Life on the Barge</h1>
           <p className="text-navy/60">A glimpse into our floating world.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           {images.map((img, idx) => (
             <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm shadow-md cursor-pointer">
               <img 
                src={img.url} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                 <p className="text-cream text-center font-serif italic text-lg">{img.alt}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;