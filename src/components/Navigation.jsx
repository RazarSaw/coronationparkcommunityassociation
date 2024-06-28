import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
const Links = ["Home", "Annoucements", "Contact Us"];
import Hamburger from "hamburger-react";

function Navigation_Desktop() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-sm	shadow-md">
      <nav className="container mx-auto hidden md:flex flex-row justify-between items-center px-8 py-4 text-white">
        <img
          width={48}
          height={48}
          src={logo}
          className="rounded-full bg-white hover:scale-[1.05] transition-all aspect-square p-2"
        />
        <ul className="relative flex flex-row gap-4 transition-all">
          {Links.map((x) => (
            <li key={x}>
              <Link to={`${x.replaceAll(" ", "-").toLowerCase()}`}>{x}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Navigation_Mobile() {
  const [toggle, setToggle] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  console.log(height);

  return (
    <nav
      ref={ref}
      className="md:hidden flex flex-col items-stretch justify-between fixed top-0 left-0 right-0 z-10 bg-gray-800/60 backdrop-blur-sm shadow-md py-4 px-8 text-white"
    >
      <div className="flex flex-row justify-between">
        <img
          width={48}
          height={48}
          src={logo}
          className="rounded-full bg-white hover:scale-[1.05] aspect-square p-2"
        />
        <Hamburger toggled={toggle} toggle={setToggle} />
      </div>
      <ul
        className={`fixed bg-gray-800/60  ${
          toggle ? "right-0 left-0" : "-right-[100%] left-[100%]"
        } top-[${height}px] flex md:flex-row flex-col transition-all `}
        style={{ top: height }}
      >
        {Links.map((x) => (
          <li
            key={x}
            className="hover:bg-black/20 backdrop-blur-lg transition-colors py-4 px-8"
          >
            <Link to={`${x.replaceAll(" ", "-").toLowerCase()}`}>{x}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navigation() {
  return (
    <>
      {Navigation_Desktop()}
      {Navigation_Mobile()}
    </>
  );
}
