import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"
import icon from "../images/favicon-32x32.png"
import { Link } from "gatsby"


const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  font-family: "Open Sans";
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  background-color: transparent;
  margin-right: 15px;
  margin-left: 5px;
  outline: none;
  border: 0px;
  cursor: pointer;
  color: #999;
  &:hover {
    opacity: 1;
  }
  .active {
    color: black;
  }
  .dark-theme {
    .links-wrapper {
      color: white;
    }
  }`;

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <Link
            className="name"
            tabIndex={0}
            to="/">
              <button>
                {/* <img src={icon} alt="logo" />{title} */}
                <img src={icon} alt="logo" />
              </button>
          </Link>
          <div className="links-wrapper">
          <Link 
              to="/">
              <button>Home</button>
            </Link>
            <Link 
              to="/#projects">
              <button onClick={() => scrollTo("#projects")}>Projects</button>
            </Link>
            <Link 
              to="/#about">
              <button onClick={() => scrollTo("#about")}>About</button>
            </Link>
            <Link 
              to="/#contact">
              <button onClick={() => scrollTo("#contact")}>Contact</button>
            </Link>
            <Link 
              to="/blog">
              <button>
                Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
