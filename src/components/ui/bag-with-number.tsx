import type { FC } from "react";
import { Bag } from "./icons";
import replaceWithPersianDigits from "@/utils/replace-with-persian-digits";

interface BagWithNumberProps {
  number: number;
}

const BagWithNumber: FC<BagWithNumberProps> = ({ number }) => {
  return (
    <div className="relative">
      <Bag />
      <div className="absolute left-3 top-4 flex h-4 w-4 items-center justify-center rounded-full bg-tesla-rose-600 text-xs text-white">
        {replaceWithPersianDigits(number.toString())}
      </div>
    </div>
  );
};

export default BagWithNumber;
