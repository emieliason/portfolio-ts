/* eslint-disable react/prop-types */
export default function Experience(props) {
  console.log(typeof props.responsibilities);
  let bullets = [];

  for (let i = 0; i < props.responsibilities.length; i++) {
    bullets.push(
      <li key={props.responsibilities[i]}>{props.responsibilities[i]}</li>
    );
  }

  return (
    <>
      <h3>{props.job}</h3>
      <h4>{props.dates}</h4>
      <ul>{bullets}</ul>
    </>
  );
}
