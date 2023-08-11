/* eslint-disable react/prop-types */
export default function Education(props) {
  return (
    <>
      <h3>{props.school}</h3>
      <h4>{props.dates}</h4>
      <p>{props.description}</p>
      <button>Transcript</button>
    </>
  );
}
