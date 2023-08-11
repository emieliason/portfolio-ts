import Education from "./Education";
import Experience from "./Experience";
import Transcript from "../assets/transcript.pdf";

export default function Credentials() {
  return (
    <div className="container">
      <div className="credentials--container">
        <div className="credentials--education">
          <h1 className="credentials--header">Education</h1>
          <Education
            school="Amherst College"
            subtitle="B.A. with Distinction"
            dates="September 2018 – May 2023"
            description="Majored in Computer Science, with additional coursework in English and Studio Art. GPA: 3.93/4.00."
            transcript={Transcript}
          />
          <Education
            school="Saint Paul Central High School"
            subtitle="Diploma"
            dates="September 2014 – June 2018"
            description="Took many AP and IB classes. GPA: 4.79/5.00. Class rank: 12/430."
            transcript=""
          />
        </div>

        <div className="credentials--experience">
          <h1 className="credentials--header">Experience</h1>
          <Experience
            job="TEACHING ASSISTANT, INTRO TO COMPUTER SCIENCE I"
            company="Computer Science Department"
            location="Amherst College, Amherst, MA"
            dates="February 2023 – May 2023"
            responsibilities={[
              "Hosted TA hours twice a week helping students with material and communicated with professor about common confusions.",
              "Answered questions at weekly labs.",
            ]}
          />
          <Experience
            job="PEER TUTOR, COMPUTER SYSTEMS"
            company="Computer Science Department"
            location="Amherst College, Amherst, MA"
            dates="February 2023 – May 2023"
            responsibilities={[
              "Helped students work on assignments, develop problem-solving skills, and sharpen computer science fundamentals in one-on-one tutoring sessions.",
            ]}
          />
          <Experience
            job="TEACHING ASSISTANT, COMPUTER SECURITY"
            company="Computer Science Department"
            location="Amherst College, Amherst, MA"
            dates="September 2022 – December 2022"
            responsibilities={[
              "Developed a steganography project alongside professor by encoding images within other images.",
              "Hosted TA hours helping students with material and communicated with professor about common confusions.",
            ]}
          />
          <Experience
            job="MCGEOCH FELLOW, COMPUTER SYSTEMS"
            company="Computer Science Department"
            location="Amherst College, Amherst, MA"
            dates="February 2022 – May 2022"
            responsibilities={[
              "Hosted weekly TA hours helping students with material and communicated with professor about common confusions.",
              "Graded and gave feedback on 48 students’ work over 7 projects",
            ]}
          />
          <Experience
            job="PEER TUTOR, INTRO TO COMPUTER SCIENCE II"
            company="Computer Science Department"
            location="Amherst College, Amherst, MA"
            dates="February 2022 – May 2022"
            responsibilities={[
              "Held one-on-one tutoring sessions helping students work on assignments, develop problem-solving skills, and sharpen computer science fundamentals.",
            ]}
          />
          <Experience
            job="COMPUTER SCIENCE MENTOR (Python Levels 1 & 2, Java Levels 1 & 2, AP Computer Science)"
            company="Juni Learning"
            location="Remote"
            dates="June 2021 - November 2021"
            responsibilities={[
              "Held one-on-one weekly online tutoring sessions introducing beginner computer science students to fundamental concepts.",
              "Assigned weekly homework and wrote regular progress updates for students, their parents, and Juni Learning.",
            ]}
          />
          <Experience
            job="JUNIOR PERN STACK WEB DEVELOPER"
            company="Share Local Love LLC"
            location="Saint Paul, Minnesota"
            dates="June 2021 - August 2021"
            responsibilities={[
              "Redesigned and rebuilt SQL database and updated server-to-client connection.",
              "Built testing tools and synthetic data for user interface and database, and documented and fixed bugs.",
              "Documented and refactored existing codebase and organized materials for future onboarding.",
            ]}
          />
          <Experience
            job="BAKERY ASSISTANT"
            company="Lunds & Byerlys"
            location="St. Paul, MN"
            dates="June 2019 - August 2019, July 2020 - August 2020"
            responsibilities={[
              "Rotated stock, took orders for cakes, serviced customers, packaged bakery items, and kept workspace sanitary.",
            ]}
          />
          <Experience
            job="NOTE TAKER FOR COSC-231, PROGRAMMING LANGUAGE PARADIGMS "
            company="Accessibility Services"
            location="Amherst College, Amherst, MA"
            dates="April 2020 - May 2020"
            responsibilities={[
              "Took detailed notes during lecture and uploaded scanned copies to the Moodle course webpage.",
            ]}
          />
          <Experience
            job="READING MENTOR"
            company="Reader to Reader"
            location="Amherst, MA"
            dates="September 2018 - April 2020"
            responsibilities={[
              "Engaged students from underprivileged local elementary and high schools in discussions about young adult novels via an online forum, encouraging students to read outside of the classroom.",
            ]}
          />
          <Experience
            job="SCHWEMM’S TEAM MEMBER"
            company="Schwemm’s Coffee House and Pub"
            location="Amherst College, Amherst, MA"
            dates="September 2018 - May 2019"
            responsibilities={[
              "Prepared and served food and drinks to students, staff, and guests at on-campus, late-night coffee house.",
              "Handled money and tickets at the cash register; ensured kitchen is adequately stocked and kept sanitary.",
            ]}
          />
          <Experience
            job="TEACHER’S ASSISTANT"
            company="Central Senior High School"
            location="St. Paul, MN"
            dates="August 2017 - June 2018"
            responsibilities={[
              "Graded and recorded homework assignments from Pre-Algebra and Algebra 1 courses.",
            ]}
          />
          <Experience
            job="FREELANCE ART COMMISSIONS"
            dates="Since ~2016"
            responsibilities={[
              "Create custom promotional art for Shop JL, Cerealization, the Amherst Green Room, and more.",
              "Sell individual commissions via Ko-Fi to online audience.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
