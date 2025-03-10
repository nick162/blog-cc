import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContact = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">Email: contact@starblogindo.com</p>
          <p className="text-sm">Phone: +62 812-3456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </Link>
          <Link href="#" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </Link>
          <Link href="#" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} StarbLogIndo. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterContact;
