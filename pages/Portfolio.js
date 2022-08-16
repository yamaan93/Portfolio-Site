import Link from "next/link";
import SubjectBox from "../components/SubjectBox";
import ProjectCard from "../components/ProjectCard";
import NavigationBar from "../components/NavigationBar";

export default function Portfolio() {
  return (
    <div>
      
      <NavigationBar></NavigationBar>
      {<SubjectBox subject = "Test">
        <ProjectCard projectName = "Test Project" img="../supportbot pfp.png">
          the core of this project was shear amazement......................
        </ProjectCard>
        <ProjectCard  projectName = "Test Project" img="../supportbot pfp.png">
          the core of this project was shear amazement......................
        </ProjectCard>
        
      </SubjectBox>}
      
    </div>
  );
}
