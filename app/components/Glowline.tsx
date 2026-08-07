import React from "react";

function Glowline() {
  return (
    <div className="relative w-24 sm:w-30 mx-auto mb-4">

   
      <div
        className="
          absolute
          inset-0
          h-1
          rounded-full
          bg-gradient-to-r
          from-[#167512]
          via-[#24B81D]
          to-[#7BEA75]
          blur-md
          animate-glow
        "
      />

      
      <div
        className="
          relative
          h-1
          rounded-full
          bg-gradient-to-r
          from-[#167512]
          via-[#24B81D]
          to-[#7BEA75]
          overflow-hidden
        "
      >
       
        <div
          className="
            absolute
            top-0
            left-[-50%]
            h-full
            w-1/2
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            opacity-90
            animate-line-shine
          "
        />
      </div>

    </div>
  );
}

export default Glowline;