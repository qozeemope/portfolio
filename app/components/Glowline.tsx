import React from 'react'

function Glowline() {
  return (
    <div className="relative w-30 mx-auto mb-4">

  <div className="absolute inset-0 h-1 rounded-full bg-gradient-to-l from-[#167512] via-[#24B81D] to-[#7BEA75] blur-md opacity-60"></div>
  <div className="relative h-1 rounded-full bg-gradient-to-l from-[#167512] via-[#24B81D] to-[#7BEA75] animate-glow"></div>
</div>
  )
}

export default Glowline