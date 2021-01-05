import React, { useEffect } from 'react'
import lens from '../_images/Lens.svg'

const NavDex = () => {
  useEffect(() => {
    //document.body.style = 'background: var(--fairy);'
  }, [])

  return (
    <header className="navdex">
      <div className="navdex navdex__extension">
        <span></span>
      </div>
      <div className="container">
        <img src={lens} alt="lens" className="navdex__lens" />
      </div>
    </header>
  )
}

export default NavDex
