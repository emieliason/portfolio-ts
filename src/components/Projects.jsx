import Project from "./Project";
import tangriangulate from "../assets/tangriangulate.png";
import productibunny from "../assets/productibunny.png";
import xstitch from "../assets/xstitch.png";
import ao3 from "../assets/ao3-tracker.png";

// Create an object to import, then map over component with props

export default function Projects() {
  return (
    <div className="container">
      <div className="projects--container">
        <Project
          title="Tangriangulate!"
          date="May 2023"
          status="In Progress!"
          description="A web application made with HTML, CSS, and plain JavaScript for the final project of my Algorithms and Visualization class. I worked on this project with Megan Huang and Sarah Wu. Our task was to visually showcase an algorithm; in this case, we chose polygon triangulation with the ear clipping method. I was mostly in charge of design, although I helped debug some of the kinks in the algorithm. I revisited this project after graduation to implement some of the features we didn't have time to cover and make the design a bit more cohesive."
          image={tangriangulate}
          link=""
          position="left"
        />
        <Project
          title="Productibunny"
          date="February 2023"
          status="In Progress!"
          description='A browser extension made with HTML, CSS, and plain JavaScript for UMass Amherst&apos;s annual HackHer Hackathon. I worked on this project with Maryam Abuissa, Tina Zhang, and Sherry Jiang over the course of one weekend. The extension compiles productivity tools such as timers, to-do-lists, and focus music all in one place to keep you on-task every time you open a new tab. The features are packaged in a charming bedroom environment with a rabbit as the main character, hence the name "Productibunny." I provided all of the art for the project as well as some of the styling. Our project won "Cutest Hack" at the Hackathon and second place for "Best Pitch" in an Amherst competition. '
          image={productibunny}
          link=""
          position="right"
        />
        <Project
          title="Pixel Art to Cross Stitch Converter"
          date="May 2021"
          status="Finished"
          description="A Java application that converts pixel art into cross-stitch patterns. At the height of the pandemic, cross-stitch was the creative hobby that I picked up and obsessively started doing. I'm a lifelong fan of Pokemon, so I was struck with the inspiration to make all of the original Generation 1 Pokemon sprites into a large cross-stitch. With their limited colors and nostalgic, pixelated style, I thought it would be the perfect project. I made a Java application that would turn my sprite sheet into a printable cross-stitch pattern, and estimate how much of each color I would need to complete the project. While I eventually abandoned it after realizing the whole generation would be a six-feet long canvas, I still think it could be a useful tool."
          image={xstitch}
          link=""
          position="left"
        />
        <Project
          title="AO3 Stats Tracker"
          date="-"
          status="Upcoming!"
          description="Archive of our Own is the Internet's biggest website for fanfiction authors to post their work. While AO3 offers a rudimentary look at how well your works are performing, they don't have a tool that tracks the progress and growth of your works over time. I want to create a tool that allows any user to view more detailed statistics on their published works. I'll be experimenting with an API."
          image={ao3}
          link=""
          position="right"
        />
      </div>
    </div>
  );
}
