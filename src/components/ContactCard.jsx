/* eslint-disable react/prop-types */
export default function ContactCard(props) {
  return (
    <>
      <div className="contactcard--container">
        <div className="contactcard--image-container">
          <img src={props.image}></img>
        </div>
        <h3>{props.type}</h3>
        <a href={props.link}>{props.contact}</a>
      </div>
    </>
  );
}
