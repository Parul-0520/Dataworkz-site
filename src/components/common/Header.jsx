import { Menu } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo.png";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-grid">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className={responsive ? "hideMenu" : "nav"}>
          {navlink.map((link, i) =>
            link.submenu ? (
              <div className="dropdown nav-item" key={i}>
                <span className="dropdown-title">{link.text}</span>
                <div className="dropdown-menu">
                  {link.submenu.map((sublink, j) => (
                    <Link to={sublink.url} key={j}>
                      {sublink.text}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={link.url} className="nav-item" key={i}>
                {link.text}
              </Link>
            )
          )}
        </nav>

        <div className="btn-container">
          <Link to="/signin" className="signinBtn">Sign In</Link>
          <button className="primaryBtn">Try for Free</button>
        </div>

        <button className="toggle" onClick={() => setResponsive(!responsive)}>
          <Menu className="icon" />
        </button>
      </div>
    </header>
  );
};







//  import { Menu } from "@mui/icons-material";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { navlink } from "../data/dummydata";
// import logo from "../data/images/logo.png";

// export const Header = () => {
//   const [responsive, setResponsive] = useState(false);

//   return (
//     <header className="header">
//       <div className="container header-grid">
       
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>

//         <nav className={responsive ? "hideMenu" : "nav"}>
//           {navlink.map((link, i) =>
//             link.submenu ? (
//               <div className="dropdown nav-item" key={i}>
//                 <span className="dropdown-title">{link.text}</span>
//                 <div className="dropdown-menu">
//                   {link.submenu.map((sublink, j) => (
//                     <Link to={sublink.url} key={j}>
//                       {sublink.text}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <Link to={link.url} className="nav-item" key={i}>
//                 {link.text}
//               </Link>
//             )
//           )}
//         </nav>

//         <div className="btn-container">
//         <Link to="/signin" className="signinBtn">Sign In</Link>
//           <button className="primaryBtn">Try for Free</button>
//         </div>

//         <button className="toggle" onClick={() => setResponsive(!responsive)}>
//           <Menu className="icon" />
//         </button>
//       </div>
//     </header>
//   );
// };