import Home_Card from "./Home_Card";
import { GrSecure } from "react-icons/gr";
import { PiSpeakerLowBold } from "react-icons/pi";
import { MdConnectWithoutContact } from "react-icons/md";

export default function Home_Benefits() {
  const cards = [
    {
      icon: <GrSecure className="text-4xl" />,
      title: "Safe",
      image:
        "https://i0.wp.com/coronationparkcommunityassociation.com/wp-content/uploads/2023/05/cpcapics.jpg?w=366&ssl=1",
    },
    {
      icon: <PiSpeakerLowBold className="text-4xl" />,
      title: "Quiet",
      image:
        "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/316942444_1997102493828976_8916523323671298671_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=C0gpCir2MDoQ7kNvgF5fq-x&_nc_ht=scontent-ord5-1.xx&oh=00_AYCZemYL5gTuOLoxXppecgZYFvg1dDb013vBxsdPR2Wa4w&oe=667E95EA",
    },
    {
      icon: <MdConnectWithoutContact className="text-4xl" />,
      title: "Connected",
      image:
        "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/325619725_718521782999866_7537929764634872931_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XEF6nZz3IWUQ7kNvgGx_CSf&_nc_ht=scontent-ord5-2.xx&oh=00_AYDZ6sADVTFOMxXqq2gVsn6aS6N0d8yvN_50kQxL9D0bHQ&oe=667E9DDE",
    },
  ];
  return (
    <div className="bg-neutral-800 text-white py-16">
      <h2 className="p-8 container mx-auto text-3xl font-extrabold">
        Our Community Is
      </h2>
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 p-8 gap-16">
        {cards.map((card) => (
          <Home_Card props={card} />
        ))}
      </div>
      <p className="container mx-auto p-8">
        Generations of residents have enjoyed the local parks and green spaces
        in Coronation Park. Today, many new families appreciate their first
        taste of Canadian life in this wonderful neighbourhood. Regal by name,
        the community carries a crown as its official logo &#128081;
      </p>
    </div>
  );
}
