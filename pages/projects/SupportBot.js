import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export default function SupportBot() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="flex flex-wrap space-x-3">
        <div className=" flex flex-col p-4 space-y-3 flex-1 max-w-xs min-w-[324px]">
          <h1 className="font-bold underline text-3xl">Support Bot </h1>
          <img
            className="w-[20rem] rounded-3xl shadow-lg"
            src="../supportbot pfp.png"
          ></img>
          <h2 className="font-semibold underline text-2xl">Motivation</h2>
          <p className="ml-1">
            Being an engineering student is hard, especially as a first year
            student, doubly so during the pandemic. I wanted to change that. As
            the co-creator of the Western Engineering Discord, I wanted to
            create a discord bot to help answer common questions and help
            students navigate the constantly changing schedule.
          </p>
        </div>
        <div className=" flex flex-col p-4 space-y-4 flex-1 max-w-md min-w-[324px]">
          <h2 className="font-semibold underline text-2xl">The Process</h2>
          <h3 className="font-semibold text-xl ml-1">The Tech Stack</h3>

          <p className="">
            <ul className="list-disc ml-6">
              <li>
                {" "}
                <a href="https://www.python.org/">Python</a> was used to take
                advantage of libraries like pandas for easy data management
              </li>
              <li>
                {" "}
                <a href="https://developers.google.com/docs/api">
                  The Google Docs API
                </a>{" "}
                was used in order to use google sheets as a data base (more on
                this later){" "}
              </li>
              <li>
                <a href="https://discord.com/developers/docs/intro">
                  The Discord Apps API
                </a>{" "}
                sending messages to the server and recieving commands
              </li>
            </ul>
          </p>
          <h3 className="font-semibold text-xl ml-1">Design Philosophy </h3>
          <p className="ml-4">
            Sending automated messages to send on given commands was the
            simplist part of this project so I won't go into depth there. Since
            the main task of the bot was to send an automated weekly schedule, I
            needed a simple an easy way to pull from some kind of data base.
            There are many ways to do this however the problem is many of them
            would require either a technically adept person to manage or a
            custom interface which I didn't have the time to make. The
            compromise I landed on was to use google sheets. This way I could
            easily share the document with colaborator who wanted to volunteer
            to help maintain the schedule.
          </p>
        </div>
        <div className="max-w-[45rem] space-y-4">
          <h2 className="font-semibold underline text-2xl">Interface</h2>
          <img
            src="/Weekly Schedule.jpg"
            className="w-[22rem] border shadow-lg inline m-1"
          ></img>
          <img
            src="/support bot demo1.jpg"
            className="w-[22rem] border shadow-lg inline"
          ></img>
          <h2 className="font-semibold underline text-2xl">Lessons Learned</h2>
          <p className="">
            <ul className="list-disc ml-6">
              <li>
                Usabilty is more important than technical robustness - it
                doesn't matter how amazing of a database you have if no one can
                use it.
              </li>
              <li>
                When starting a new project, make the tech stack as simple as
                possible - it can be tempting to try to use a million libraries
                and frameworks, but the focus should be minimum functionality
                before exploring more complex implementations.
              </li>
            </ul>
          </p>
          <a
            className="flex justify-center align-bottom m-4"
            href="https://github.com/yamaan93/Engineering-Support-Bot "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined">
              View Full Source Code on github{" "}
              <GitHubIcon className=" m-2"></GitHubIcon>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
