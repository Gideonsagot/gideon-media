import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const BrandVideo = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Gideon Media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how we transform businesses through innovative digital marketing and professional web development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => !isPlaying && setShowControls(true)}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&h=1080"
              preload="metadata"
              playsInline
              webkit-playsinline
              controls={false}
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 flex items-center justify-center">
              {/* Brand Logo & Services Overlay */}
              <div className="text-center space-y-8 p-8 z-10">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Gideon Media
                  </h1>
                  <p className="text-xl md:text-2xl text-white drop-shadow-lg">
                    Your Digital Growth Partner
                  </p>
                </div>

                {/* Services showcase */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 shadow-lg">
                    <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-md">Meta Ads</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">Facebook & Instagram</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 shadow-lg">
                    <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-md">Shopify Stores</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">E-commerce Solutions</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 shadow-lg">
                    <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-md">Web Development</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">Professional Websites</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 shadow-lg">
                    <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-md">Pinterest Marketing</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">Visual Content Strategy</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 shadow-lg">
                    <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-md">Ads Strategy</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">Campaign Optimization</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30 shadow-lg">
                    <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-md">24/7 Support</h3>
                    <p className="text-white/90 text-xs drop-shadow-sm">Always Available</p>
                  </div>
                </div>

                {/* Key stats */}
                <div className="flex justify-center space-x-8 text-white">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold drop-shadow-lg">180+</div>
                    <div className="text-sm text-white/90 drop-shadow-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold drop-shadow-lg">400%</div>
                    <div className="text-sm text-white/90 drop-shadow-sm">Avg ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold drop-shadow-lg">99.5%</div>
                    <div className="text-sm text-white/90 drop-shadow-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>

            {/* Play button overlay when paused */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full p-6"
                  onClick={togglePlay}
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 180+ successful businesses that have transformed their digital presence with Gideon Media
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20start%20my%20free%20strategy%20call%20with%20Gideon%20Media', '_blank')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Start Your Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVideo;