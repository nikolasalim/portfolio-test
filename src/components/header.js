import { Link } from "gatsby"
import React from "react"

// should I create two different header components or just one and add validation to recognize if i'm on a project page?

const Header = () => (
  <header>
    <div className="about">About</div>
    <div className="smiley">:)</div>
    <div className="about">Projects</div>
  </header>
)

export default Header
