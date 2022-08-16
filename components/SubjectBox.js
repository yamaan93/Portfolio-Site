export default function SubjectBox(props) {
  return ( 
    <div className="drop-shadow-2xl m-2 border-4 border-double border-gray-500 rounded ring shadow-xl ">
      <h1 className="text-5xl font-bold p-2">{props.subject}</h1>
      <div className="flex m-1">
        {props.children}
      </div>
    </div>
  );
}
