import Emi from "../assets/fullbody-emi.jpg";

export default function About() {
  return (
    <div className="container">
      <div className="about--text">
        <h1>{"Hi, I'm Emi!"}</h1>
        <p>
          {"Welcome to my portfolio site! My name is Emi Eliason, I'm 23 years old, and I use she/her pronouns. " +
            " I've lived in Saint Paul, Minnesota since I was two years old. "}
        </p>
        <p>
          {"I recently graduated Amherst College with a B.A. with distinction in Computer Science." +
            " While that makes me a STEM major in name, I have had a lifelong passion for the humanities, and I have been drawing since I was seven years old." +
            " I'm actively looking for work in the computer science industry that combines my love of art and aesthetics with my love of programming, preferrably as a web developer with a front-end lean."}
        </p>
        <h4>{"As a programmer, my priorities are:"}</h4>
        <ul>
          <li>
            {
              "Clean, intuitive, and well-documented code that actively communicates its intentions to the reader"
            }
          </li>
          <li>
            {
              "Adopting a careful approach of solving smaller problems correctly first to avoid unforeseen errors at the higher level"
            }
          </li>
          <li>
            {
              "Acknowledging that learning is never-ending and keeping up with the latest versions of languages and frameworks"
            }
          </li>
          <li>
            {
              "A positive mindset that doesn't get discouraged by failures and acknowledges when stepping away is necessary"
            }
          </li>
          <li>
            {
              "Creating a space in the computer science industry for historically underrepresented groups, such as non-men, LGBTQ+ people, and BIPOC to thrive and feel safe"
            }
          </li>
        </ul>
        <p>
          {
            "Aside from coding and art, my interests include walking, listening to K-Pop, cooking, playing video games, and sleeping probably too much. "
          }
        </p>
      </div>
      <img className="about--pic" src={Emi}></img>
    </div>
  );
}
