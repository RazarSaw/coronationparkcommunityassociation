import { FaFacebookF } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const icons = [
    ["https://facebook.com/cpcainc", <FaFacebookF />],
    ,
    ["mailto: coronationpark.ca@gmail.com", <CiMail />],
    ["tel:3065454642", <FaPhoneAlt />],
  ];
  return (
    <footer className="bg-neutral-950">
      <div className="flex justify-between text-white container mx-auto p-8">
        <p>© {new Date().getFullYear()} CPCA. All Rights Reserved.</p>
        <div className="flex gap-4">
          {icons.map((icon) => (
            <a key={icon[0].toLowerCase()} href={icon[0]}>
              {icon[1]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
