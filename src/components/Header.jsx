import { useState, useEffect } from "react";
import { Link } from "wouter";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowBackground = window.scrollY > 0;
      setShowHeaderBackground(shouldShowBackground);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showHeaderBackground && <div className="headerBackground"></div>}
      <div className={`header ${menuOpen ? "open" : ""}`}>
        <Link href="/">
          Voyage Vibes <img src="images/blog-icon.svg" alt="Blog Icon" />
        </Link>
        <div className="menuIcon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
        <div className="menuMask" onClick={() => setMenuOpen(false)}></div>
        <div className="closeMenuIcon" onClick={() => setMenuOpen(false)}>
          ☒
        </div>
        <ul className={`menuNav ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/newlocation" onClick={() => setMenuOpen(false)}>
              Add Location
            </Link>
          </li>
          <li>
            <Link href="/aboutme" onClick={() => setMenuOpen(false)}>
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
