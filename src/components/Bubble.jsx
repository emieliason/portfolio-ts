/* eslint-disable react/prop-types */
export default function Bubble(props) {
  return (
    <div className="bubble--container">
      <img className="bubble--image" src={props.image}></img>
    </div>
  );
}
