import { Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="text-center px-4 sm:px-0 relative">
        <div className="flex flex-wrap justify-center gap-4 py-6">
          <a
            href="https://facebook.com/gb.2402"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 inline-flex items-center justify-center"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://github.com/Baodng" // sửa thành GitHub của bạn
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 rounded-full bg-gray-800 hover:bg-black transition duration-300 inline-flex items-center justify-center"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.instagram.com/sou1_gb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300 inline-flex items-center justify-center"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        <div className="text-center text-xs sm:text-sm text-gray-500 py-3 bg-opacity-10">
          © 2024 Gia Bao. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
