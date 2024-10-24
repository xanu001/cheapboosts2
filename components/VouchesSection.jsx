import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, Sparkles } from 'lucide-react';

const VouchesSection = () => {
  const [vouches, setVouches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchVouches = async () => {
      try {
        const response = await fetch('https://myvouch.es/api/vouches/cheapboosts');
        if (!response.ok) throw new Error('Failed to fetch vouches');
        const data = await response.json();
        
        // Sort vouches from newest to oldest
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setVouches(data);
      } catch (err) {
        console.error('Error fetching vouches:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVouches();
  }, []);

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 500);
  };

  if (loading) {
    return (
      <section className="py-20 bg-zinc-900 ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"/>
          <p className="text-purple-400 animate-pulse">Loading vouches...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden absolute inset-0 grid-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent)] animate-pulse-slow" />
        <div className="absolute inset-0 grid-background opacity-20" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            <div className="w-24 h-24 border border-purple-500/30 rounded-lg" />
          </div>
        ))}
      </div>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"/>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"/>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"/>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <h2 className="text-4xl font-bold text-white text-center">Customer Vouches</h2>
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vouches.slice(0, displayCount).map((vouch, index) => (
            <div 
              key={`${vouch.discord_id}-${index}`}
              className="opacity-0 animate-[fadeSlideIn_0.5s_ease-out_forwards] group"
              style={{ 
                animationDelay: `${(index % 6) * 0.1}s`,
              }}
            >
              <div className="p-6 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 
                           transform transition-all duration-300 hover:scale-102 hover:bg-zinc-800/70
                           hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={vouch.discord_avatar} 
                    alt={vouch.discord_name}
                    className="w-10 h-10 rounded-full ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/40/40';
                      e.target.onerror = null;
                    }}
                  />
                  <div>
                    <p className="text-white font-medium">{vouch.discord_name}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: parseInt(vouch.stars) }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 text-purple-400 fill-current group-hover:text-purple-300 transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                  {vouch.content.replace(/\+vouch <@\d+>/, '').trim()}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {new Date(vouch.date).toLocaleDateString()}
                  </span>
                  {vouch.proof && (
                    <a 
                      href={vouch.proof}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
                    >
                      View Proof
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {displayCount < vouches.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="group flex items-center gap-2 px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 
                       text-purple-400 rounded-lg transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingMore ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-400"/>
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"/>
              )}
              <span>Load More Vouches</span>
            </button>
          </div>
        )}

        {vouches.length === 0 && (
          <p className="text-gray-400 text-center">No vouches found.</p>
        )}
      </div>
    </section>
  );
};

// Add this to your global CSS file
const styles = `
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

export default VouchesSection;
