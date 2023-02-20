import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export default function BSPD() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="flex flex-wrap space-x-3">
        <div className=" flex flex-col p-4 space-y-3 flex-1 max-w-xs min-w-[324px]">
          <h1 className="font-bold underline text-3xl">BSPD </h1>
          <img
            className="w-[20rem] rounded-3xl shadow-lg"
            src="../bspd.png"
          ></img>
          <h2 className="font-semibold underline text-2xl">Motivation</h2>
          <p className="ml-1">
            One of the rules requirements in the FSAE competition is that the car must be equipt with a "Brake System Plausibility Device" (BSPD) in order to disconnect high voltage power from the motor if the motor is drawing current under high brake pressure.
            It must do this withut the use of a microcontroller. 
          </p>
        </div>
        <div className=" flex flex-col p-4 space-y-4 flex-1 max-w-md min-w-[324px]">
          <h2 className="font-semibold underline text-2xl">The Process</h2>
          <h3 className="font-semibold text-xl ml-1">The Tech Stack</h3>

          <p className="">
            <ul className="list-disc ml-6">
              <li>
                {" "}
                <a href="https://www.altium.com/">Altium Designer</a> was used to create the schematic and PCB layout.
              </li>
              <li>
                {" "}
                <a href="https://www.falstad.com/circuit/">
                  The Falstad Circuit Simulator
                </a>{" "}
                was used to simulate and verify the analog and digital logic would work correctly.{" "}
              </li>
            </ul>
          </p>
          <h3 className="font-semibold text-xl ml-1">Design Philosophy </h3>
          <p className="ml-4">
            One of my main design goals was to design the circuit in such a manner that each input condition and it's corresponding output would be handled individually. For example, one of the conditions the circuit needs to check for is that the inputs are not disconnected.
             There is 1 comaprator that is responsible for checking for this condition, and there are a total of 6 comparators used to check for each of the individual conditions required. It would have been possible to reduce the part count and use less comparators and logic gates, 
             however this would make debugging more difficult as it would be harder to decern which of the conditions cause the device to trip.
          </p>
        </div>
        <div className="max-w-[45rem] space-y-4">
          <h2 className="font-semibold underline text-2xl">The Desgin</h2>
          <img
            src="/bspd_sch.png"
            className="w-[28rem] border shadow-lg inline m-1"
          ></img>
          <img
            src="/bspd_pcb.png"
            className="w-[28rem] border shadow-lg inline"
          ></img>
          <h2 className="font-semibold underline text-2xl">Lessons Learned</h2>
          <p className="">
            <ul className="list-disc ml-6">
              <li>
                It's very important not only to simulate your designs before you order PCB's, 
                but also build them out with the correct components on a breadboard first. We managed to catch issues with the design missing certain pull up resistors because we tested the whole system on a breadboard first.
              </li>
              <li>
                When starting a board design, it's much faster to design a simplified version of your circuit in a simulation tool before doing the detailed design because it helps make interation and design troubleshooting much more efficient. 
              </li>
            </ul>
          </p>
          {/* <a
            className="flex justify-center align-bottom m-4"
            href="https://github.com/yamaan93/Engineering-Support-Bot "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined">
              View Full Source Code on github{" "}
              <GitHubIcon className=" m-2"></GitHubIcon>
            </Button>
          </a> */}
        </div>
      </div>
    </div>
  );
}
