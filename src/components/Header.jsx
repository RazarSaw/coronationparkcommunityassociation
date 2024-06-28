// import background from "./../assets/20240330_150048.jpg";

export default function Header() {
  return (
    <header className={`bg-slate-500 text-white bg-no-repeat bg-center bg-cover bg-[url('./20240330_150048.jpg')] bg-blend-multiply`}>
      {/* <div className="backdrop-blur-md bg-gradient-to-r from-red-200/40 via-orange-500/40 to-yellow-500/40 min-h-[50vh] flex items-center"> */}
      <div className="backdrop-blur-md min-h-[80vh] flex items-center">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-sans font-extrabold mb-4 leading-relaxed">
            Coronation Park Community <br/>Association
          </h1>
          <p>A community focused on helping our members grow and thrive 📈</p>
        </div>
      </div>
    </header>
  );
}
