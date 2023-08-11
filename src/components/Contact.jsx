import ContactCard from "./ContactCard";
import LinkedIn from "../assets/linkedin.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";

export default function Contact() {
  return (
    <>
      <div className="contact--container">
        <ContactCard
          type="Email"
          image={Email}
          link="mailto:emieliason@gmail.com"
          contact="emieliason@gmail.com"
        />
        <ContactCard
          type="Phone"
          image={Phone}
          link="tel:6123273693"
          contact="(612)-327-3693"
        />
        <ContactCard
          type="LinkedIn"
          image={LinkedIn}
          link="https://www.linkedin.com/in/emi-eliason/"
          contact="Emi Eliason"
        />
      </div>
    </>
  );
}
