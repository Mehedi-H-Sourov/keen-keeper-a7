
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-[#2f5d4e] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">KeenKeeper</h1>

        {/* Description */}
        <p className="text-sm text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h2 className="mb-3">Social Links</h2>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaYoutube />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaXTwitter />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 opacity-30 mb-4" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 justify-center mt-2 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
