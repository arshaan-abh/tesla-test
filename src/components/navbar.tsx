import type { FC } from "react";
import { ArrowRight, Bag, Home, More, Search } from "./ui/icons";

const NavBar: FC = () => {
  return (
    <div className="static top-0 flex gap-4 bg-white px-4 py-5">
      <ArrowRight />
      <Home />
      <Bag />
      <div className="grow" />
      <Search />
      <More />
    </div>
  );
};

export default NavBar;
