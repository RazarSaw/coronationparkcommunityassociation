export default function Home_Card({ props }) {
  return (
    // <section className={`bg-gray-100 md:outline outline-2 outline-offset-4 outline-yellow-500 backdrop-blur-md rounded-[8px] p-4 grid grid-cols-[auto_1fr] gap-4 items-center`}>
    <section
      className={`outline outline-2 outline-yellow-500 backdrop-blur-md rounded-[8px] grid grid-cols-1 grid-rows-1 items-center animate-fade`}
    >
      <img src={props.image} className="h-full w-full max-h-[20vh] object-cover rounded-t-[8px]"/>
      <div className="p-8 flex flex-col items-center gap-4">
        {props.icon}
        <h2 className="text-2xl font-bold">{props.title}</h2>
        {/* <p className="col-span-2">{props.description}</p> */}
      </div>
    </section>
  );
}
