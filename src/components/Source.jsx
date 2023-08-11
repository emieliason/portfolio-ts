import Bubble from "./Bubble";
import GitHub from "../assets/github-icon.png";
import CSS from "../assets/css-icon.png";
import JS from "../assets/javascript-icon.png";
import React from "../assets/react-icon.png";
import Vite from "../assets/vite-icon.svg";
import HTML from "../assets/html5-icon.png";

export default function Source() {
  return (
    <div className="source--container container">
      <h1 className="source--title">This website was made with:</h1>
      <div className="source--bubbles">
        <Bubble image={GitHub} name="GitHub" />
        <Bubble image={CSS} name="CSS" />
        <Bubble image={JS} name="JavaScript" />
        <Bubble image={React} name="React" />
        <Bubble image={HTML} name="HTML" />
        <Bubble image={Vite} name="Vite" />
      </div>
      <button>Source Code</button>
    </div>
  );
}
