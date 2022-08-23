import NavigationBar from "../../components/NavigationBar";

export default function SupportBot() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="flex">
        <div className=" flex flex-col p-4 space-y-3 flex-1 max-w-xs">
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
        <div className=" flex flex-col p-4 space-y-3 flex-1 max-w-xs">
        <h2 className="font-semibold underline text-2xl">The process</h2>
          
          
          <p className="ml-1">
            
          </p>
        </div>
      </div>
    </div>
  );
}
