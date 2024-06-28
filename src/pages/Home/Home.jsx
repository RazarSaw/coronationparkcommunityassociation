import logo from "./../../assets/logo.png";
// import map from "./../../assets/Saskatchewan_2012_Regina_Coronation_Park.svg";
import { Link } from "react-router-dom";
import Home_Card from "./Home_Card";
import Home_Quote from "./Home_Quote";
import Home_Benefits from "./Home_Benefits";
import Home_Mission from "./Home_Mission";

export default function Home() {
  const schools = [
    "https://gladysmcdonald.rbe.sk.ca/sites/gladysmcdonald.rbe.sk.ca/files/GladysMcDonaldSchoolLogo.png",
    "https://coronationpark.rbe.sk.ca/sites/coronationpark.rbe.sk.ca/files/coro_logo1_0.png",
    "https://stpeter.rcsd.ca/images/logo.svg",
    "https://archbishopmconeill.rcsd.ca/images/logo.svg",
    "https://thomcollegiate.rbe.sk.ca/sites/thomcollegiate.rbe.sk.ca/files/thom_logonew.png",
  ];
  const parks = [
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNrtJ0VWFd8FV57C5fUDWTZprWCaXLea9EkAKZr=w408-h306-k-no",
      name: "Lorimer Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNT21C21y9DGrNT0r7qVVU5rGKQql1HD2uBw8g=w408-h306-k-no",
      name: "Derby Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNQ0GVNgUu8at4s5RpaLseU3rF5B5DjzKnTAquf=w203-h152-k-no",
      name: "Carey Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNVcd4ntc2kez99c-l-JRwAC2z8fUjz8vYJAWp8=w408-h544-k-no",
      name: "Garnet Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNBaC-UO6bEUU71jlwW9JFmYejEEJeh_jkFs_0-=w408-h725-k-no",
      name: "Pony Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipPWh-2M9ur2hk77z0v0UN3d7bYROlTNPFJFEAAB=w408-h240-k-no-pi-10-ya278-ro0-fo100",
      name: "Sheppard Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipODO-K3LcKgmb7x6X8ZymTWXnGcVa5rI2zPT7vF=w408-h240-k-no-pi-0-ya184-ro0-fo100",
      name: "McMurchy Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMgLU0Eg4Oa9Zj9UG2wwWp3SnaCbQ9N6tTDWoXB=w426-h240-k-no",
      name: "Merlin Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNs5ggJFa69JDsxsf17uvoIoODhotMg4jNpdv9Q=w426-h240-k-no",
      name: "Regent Pool Park",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOdYSMCTSgOKSepoSLTvggK-_9UWsJhkdwiseLK=w203-h114-k-no",
      name: "Regent Park Off-Leash Dog Park",
    },
  ];
  const recreations = [
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMjF8EeWnx5U0CZ2ILuEqiAhOdmi8f-KgdrH_CL=w426-h240-k-no",
      name: "Regent Outdoor Pool",
    },
    {
      image:
        "https://d22ksth68ujgu2.cloudfront.net/a7461b203df9ed0598acc21a224fb2ce_m_IMG_7683.jpg",
      name: "Regent Park Disc Golf",
    },
    {
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMYqM-JufO0PxQVSN9GRG8VWMz-ZdeZqGyLO9vL=w426-h240-k-no",
      name: "Wheat City Kinsmen Arena",
    },
  ];
  return (
    <>
      <Link
        to={"/contact-us"}
        className="bg-yellow-400 p-4 block hover:scale-105 transition-all text-center cursor-pointer font-bold text-gray-800"
      >
        Volunteer Now!
      </Link>
      <Home_Benefits />
      <Home_Quote />
      <Home_Mission />
      <div className="bg-neutral-800">
        <hr className="w-[40%] mx-auto border-white border-4 rounded-full" />
      </div>
      <div className="py-16 bg-neutral-800 text-white">
        <h2 className="p-8 container mx-auto text-3xl font-bold">
          Opportunities
        </h2>
        <p className="container mx-auto p-8">
          From raising a family, to walking the dog, Coronation Park is home to
          a variety of oppourtunities. We're home to schools, parks, and stores.
        </p>
        <h3 className="p-8 container mx-auto text-2xl font-bold">Schools</h3>
        <div className="grid lg:grid-cols-5 lg:grid-rows-1 grid-rows-5 container mx-auto gap-8 p-8">
          {schools.map((school) => {
            return (
              <div className="bg-white flex-1 p-2 grid rounded-[8px]">
                <img
                  src={school}
                  className="lg:aspect-[4] aspect-[9] place-self-center object-contain"
                />
              </div>
            );
          })}
        </div>
        <h3 className="p-8 container mx-auto text-2xl font-bold">Parks</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 container mx-auto gap-8 p-8">
          {parks.map((park) => {
            return (
              <div className="bg-white grid grid-row-[1fr,_2fr] rounded-[8px]">
                <img
                  src={park.image}
                  className="aspect-[2] rounded-t-[8px] object-cover w-full h-full"
                />
                <h4 className="text-1xl p-4 text-black">{park.name}</h4>
              </div>
            );
          })}
        </div>
        <h3 className="p-8 container mx-auto text-2xl font-bold">Recreation</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 container mx-auto gap-8 p-8">
          {recreations.map((recreation) => {
            return (
              <div className="bg-white grid grid-row-[1fr,_2fr] rounded-[8px]">
                <img
                  src={recreation.image}
                  className="aspect-video rounded-t-[8px] object-cover w-full h-full"
                />
                <h4 className="text-1xl p-4 text-black">{recreation.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
