export default function ProjectCard(props) {
  return (
    //TODO: fix width not adjusting correctly
    <div className="h-50  m-3 p-3 ring rounded min-w-fit drop-shadow">
      <h1 className="text-2xl font-bold text-left mb-4 ">
        {props.projectName}
      </h1>
      <div className="flex">
        <img className="inline rounded w-20 ml-2" src={props.img}></img>
        <p className="p-2 ml-0.5"> {props.children}</p>
      </div>
    </div>
  );
  //TODO:Add view project button
}
