import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto items-center flex justify-between bg-white h-20">
        <p className="text-primary-100 font-bold text-3xl">Karcis.com</p>
        <div className="flex gap-x-9 text-secondary-100 font-medium text-lg">
          <p>Concerts</p>
          <p>Arts</p>
          <p>Conference</p>
          <p>Movies</p>
          <p>International</p>
        </div>
        <div className="flex gap-x-9">
          <Button variant={"outline"}>Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
