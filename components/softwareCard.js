export default function SoftwareCard(props) {
  return (
    <div className="card">
      <h3 className="cardTitle">
      <img src="../github.png" className="cardLogo"></img>
        <a href={props.githubLink}>{props.title}</a>
      </h3>
      {props.children}
    </div>
  );
}
