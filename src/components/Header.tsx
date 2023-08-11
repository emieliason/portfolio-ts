import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Credentials from "./Credentials";
import Art from "./Art";
import Contact from "./Contact";
import Source from "./Source";

export default function Header() {
  // Page names array
  const pageNames: string[] = [
    "about",
    "projects",
    "credentials",
    "art",
    "contact",
    "source",
  ];

  // Loop over array of names to create links
  const headerElems: JSX.Element[] = pageNames.map((pageName) => {
    return (
      <Link
        className="bg-[#B9E4CF] font-body w-24 h-4 flex justify-center items-center p-2 text-sm rounded-[12px] expand"
        to={pageName}
      >
        {`${pageName}`}
      </Link>
    );
  });

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/source" element={<Source />} />
      </Routes>
      <footer className="flex py-6 justify-center items-end gap-[2vw] sticky bottom-0 inset-x-0">
        {headerElems}
      </footer>
    </div>
  );
}
