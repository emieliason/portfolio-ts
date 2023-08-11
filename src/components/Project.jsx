/* eslint-disable react/prop-types */
export default function Project(props) {
  return (
    <div className="project--container">
      {props.position === "right" && (
        <img className="project--image" src={props.image}></img>
      )}
      <div className="project--text">
        <h3>{props.title}</h3>
        <h4>
          {props.date} + {props.status}
        </h4>
        <p>{props.description}</p>
      </div>
      {props.position === "left" && (
        <img className="project--image" src={props.image}></img>
      )}
    </div>
  );
}
