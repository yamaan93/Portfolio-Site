export default function ProjectCard(props){
    return(
        <div className="h-50 w-50 m-3 p-3 ring rounded">
            <h1 className="text-2xl font-bold text-left">{props.projectName}</h1>
            <p><img className="inline" src={props.img}></img> {props.children}</p>
        </div>

    );
}