import type { FC } from "react";
import { ArrowRight, Home, More, Search } from "../ui/icons";
import BagWithNumber from "../ui/bag-with-number";

const NavBar: FC = () => {
  return (
    <div className="sticky top-0 z-50 flex gap-4 bg-white px-4 py-5">
      <ArrowRight />
      <Home />
      <BagWithNumber number={5} />
      <div className="grow" />
      <Search />
      <More />
    </div>
  );
};

export default NavBar;
