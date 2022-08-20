export default function SubjectBox(props) {
  return ( 
    <div className="drop-shadow-2xl m-5 
    border-4 border-double  rounded ring-black ring shadow-xl flex-1">
      <h1 className="text-5xl  p-2">{props.subject}</h1>
      <div className="flex m-1 flex-wrap">
        {props.children}
      </div>
    </div>
  );
}
