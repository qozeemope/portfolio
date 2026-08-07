import React from 'react'

function Footer() {
  return (
   <footer className="mt-20 py-6 border-t border-border text-center text-sm text-text-secondary">
  <p>
    © {new Date().getFullYear()} Qozeem Salami. All rights reserved.
  </p>
</footer>
  )
}

export default Footer