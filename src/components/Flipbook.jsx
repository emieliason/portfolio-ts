/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Flipbook(props) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleClick(direction) {
    console.log("I got clicked!");

    direction === "left"
      ? setCurrentImage(
          (prevCurrentImage) =>
            (prevCurrentImage - 1 + props.imageList.length) %
            props.imageList.length
        )
      : setCurrentImage(
          (prevCurrentImage) => (prevCurrentImage + 1) % props.imageList.length
        );
  }

  return (
    <div className="flipbook--container">
      <h3 className="flipbook--title">{props.title}</h3>
      <div className="flipbook--content">
        <button
          className="flipbook--button left-facing"
          onClick={() => handleClick("left")}
        ></button>
        <div className="flipbook--image-container">
          <img
            className="flipbook--image"
            src={props.imageList[currentImage]}
          ></img>
        </div>
        <button
          className="flipbook--button"
          onClick={() => handleClick("right")}
        ></button>
      </div>
    </div>
  );
}
