import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-red flex justify-center py-2">
      <span className="text-white hover:underline">
        <Link href="/privacy">Privacy Policy</Link>
      </span>
    </div>
  );
};

export default Footer;
