import Link from "next/link";
import SubjectBox from "../components/SubjectBox";
import ProjectCard from "../components/ProjectCard";
import NavigationBar from "../components/NavigationBar";

export default function Portfolio() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="flex flex-col">
        <SubjectBox subject="Software">
        <ProjectCard
            projectName="wikiNow"
            projectType="Hack Western Co:here Award Winner!"
            img="../wikiHow_thumbnail.png"
            link="https://devpost.com/software/wikinow"
          >
            Have you ever been stuck on a daunting task? 
            Perhaps you need a solution quickly, but there isn't a convenient tutorial ready for you? 
            Sometimes you don't know wikiHow but you need answers wikiNow.
          </ProjectCard>
          <ProjectCard
            projectName="Portfolio Site"
            projectType="This Website! - 2022"
            img="../webdev.png"
            link="https://github.com/yamaan93/portfolio-site"
          >
            In order to show case my projects, I wanted to create a Portfolio
            website. I took this as an oppourtinty to explore web development.
            Using react and Next.js I created a dynamic webiste with lots of
            room to grow in the future.
          </ProjectCard>
          <ProjectCard
            projectName="Support Bot"
            projectType="Discord Chat bot - 2020"
            img="../supportbot pfp.png"
            link="/projects/SupportBot"
          >
            I created a discord bot to help first year engineering students
            manage their workload. It reads content from a community run task
            list on google sheets and updates students on what they need to get
            done on a given day
          </ProjectCard>
          <ProjectCard
            projectName="FRC 2019 Robot Code"
            projectType="Java Based Robot Code - 2019"
            img="scoring rocket.jpg"
            link="https://github.com/5288TheSpartans/DeepSpace2019"
          >
            In the FIRST Robotics Competition (FRC), teams have six weeks to
            build ~120 pound robots, that compete in an annual competition.
            Here's the code we worked on for Spartan Robotics' 2019 robot. I'm
            responsible for the arm control algorithm which uses a sin feed
            forward along with PID to maintain the arm position.
          </ProjectCard>
        </SubjectBox>

        <SubjectBox subject="Electrical">
          <ProjectCard
            projectName="Triple-Motor Driver for 3-axis finger simulator"
            projectType="Schematic, Layout, & Assembly! - 2022"
            link="https://365.altium.com/files/862F2487-1215-47D6-A019-9A2ED5090CA7"
            img="../handsim4.jpg"
          >
            Designed during my time at
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.sjhc.london.on.ca/areas-of-care/roth-mcfarlane-hand-and-upper-limb-centre-hulc"
            >
              &nbsp;Lawson Health Reseach's Hand and Upper Limb Center,&nbsp;
            </a>
            The goal of this project was to consolidate several loose components
            for motor drivers and sensors into a single, easy to implement
            board. Overall space consumption was reduced by 200%!
          </ProjectCard>
        </SubjectBox>
        <SubjectBox subject="Mechanical">
          <ProjectCard
            projectName="Spartan Robotics 2020 Robot"
            projectType="FRC 5288's 2020 Robot - 2020"
            link="https://www.thebluealliance.com/team/5288/2020"
            img="../hot shooter shot.JPG"
          >
            Designed for the 2020 FRC game, Infinite Recharge, the robot
            features a vectored intake, belted conveyor, as well as turreted
            fly-wheel shooter with an adjustable hood. While a prototype was
            made, unfortunately full assembly was discontinued due to the
            pandemic.
          </ProjectCard>
          <ProjectCard
            projectName="CVT Gearbox"
            projectType="Design and CAD challange - 2019"
            link="https://www.chiefdelphi.com/t/tank-style-cvt-gearbox/358601/78"
            img="../CVT.png"
          >
            Designed back in 2019, The goal of this project was to design a
            continously variable transmition for use in the FIRST Robotics
            Compoetion. While prototypes where unsucessful, it was an amazing
            learning experience.
          </ProjectCard>
        </SubjectBox>
      </div>
    </div>
  );
}
