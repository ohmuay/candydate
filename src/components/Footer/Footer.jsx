import React from "react";

function Footer() {
  return (
    <footer className="p-6 mt-auto text-purple-200 bg-purple-700 xl:px-0">
      <div className="container mx-auto text-center">
        Copyright &copy; {new Date().getFullYear()} Candydate
      </div>
    </footer>
  );
}

export default Footer;
