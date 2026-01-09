import { Search, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-safari.jpg';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Licensed by Tourism Regulatory Authority (TRA)</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up stagger-1">
            Experience the Magic of Kenya
            <span className="block text-primary mt-2">From Bush to Beach</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-2">
            Discover breathtaking safaris, pristine beaches, and unforgettable adventures 
            with Kenya's most trusted tour operator.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl lg:rounded-full p-3 lg:p-2 shadow-elevated max-w-3xl mx-auto animate-fade-in-up stagger-3">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0">
              {/* Destination Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 lg:border-r border-border">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Date Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 lg:border-r border-border">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <input
                  type="text"
                  placeholder="When?"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Search Button */}
              <button className="btn-gold flex items-center justify-center gap-2 py-4 lg:py-3 lg:px-8 rounded-xl lg:rounded-full">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-fade-in-up stagger-4">
            <span className="text-white/60 text-sm">Popular:</span>
            {['Maasai Mara', 'Diani Beach', 'Amboseli', 'Mt. Kenya'].map((place) => (
              <button
                key={place}
                className="text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors"
              >
                {place}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
