const ImageCarousel = ({ images }) => {
  return (
    <div className="carousel-container relative w-full overflow-hidden bg-[#0a0a0a] py-8 border-t border-white/5">
      {/* Side gradients for fade effect */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

      {/* Animated track - duplicate images for infinite loop */}
      <div className="animate-marquee flex gap-4 md:gap-6 px-4 md:px-6">
        {[...images, ...images].map((imgSrc, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[260px] md:w-[420px] h-[180px] md:h-[280px] relative overflow-hidden group/img cursor-ew-resize"
          >
            <img
              src={imgSrc}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover filter grayscale opacity-70 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80`;
              }}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .carousel-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;