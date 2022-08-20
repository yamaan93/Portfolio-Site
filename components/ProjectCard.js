import { Button } from "@mui/material";

export default function ProjectCard(props) {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48 md:min-w-[15rem]"
            src={props.img}
          ></img>
        </div>
        <div class="p-7">
          <div class=" tracking-wide text-sm text-indigo-500 font-semibold">
            {props.projectType}
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {props.projectName}
          </a>
          <p class="mt-2 text-slate-500">{props.children}</p>
          <div className="flex justify-center items-end mt-3">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="rounded-full bg-sky-500 hover:bg-sky-400 p-2 text-white flex-1">
                View Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
