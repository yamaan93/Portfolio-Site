import Link from "next/link";
import Layout from "../components/portfolioLayout";
import SubjectCard from "../components/subjectCard";
import SoftwareCard from "../components/softwareCard";

export default function Portfolio() {
  return (
    <Layout>
      <SubjectCard subject="Software">
        <SoftwareCard
          title="Support Bot"
          githubLink="https://github.com/yamaan93/Engineering-Support-Bot"
          image = "../supportbot pfp.png"
        >
            
          A discord bot for the unofficial Western Engineering discord. The
          primary functionally is for providing students with easy to access
          weekly task lists to help the engineering community keep on track
          through the riggors of the semester. The tasklist is read from a
          shared Google sheets file so that collaborators can easily update the
          weekly schedule on the fly. This means that no programming or
          technical knowledge is required on behalf of the contributors.
        </SoftwareCard>
        <SoftwareCard
          title="Portfolio Site"
          githubLink="https://github.com/yamaan93/Engineering-Support-Bot"
          image = "../site.jpg"
        >
            
          With the main goal to learn React and Next.js, this project is the
          code behind this very website!
        </SoftwareCard>
      </SubjectCard>
    </Layout>
  );
}
