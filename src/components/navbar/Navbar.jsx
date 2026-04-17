import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { LuChartLine } from "react-icons/lu";
import MyNavLink from "./MyNavLink";


const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <IoHomeOutline /> },
    { path: "/timeline", text: "Timeline", icon: <RiTimeLine /> },
    { path: "/stats", text: "Stats", icon: <LuChartLine /> },
  ];

  return (
    <nav className="shadow bg-white">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 py-4">
        
        <Image src={logoImg} width={100} height={100} alt="Logo" />

        <ul className="flex items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <MyNavLink href={item.path}>
                <span className="flex items-center gap-1 px-2 py-1 rounded">
                  {item.icon}
                  {item.text}
                </span>
              </MyNavLink>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;