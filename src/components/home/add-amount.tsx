import { FC, useState } from "react";
import { Plus } from "@/components/ui/icons";
import replaceWithPersianDigits from "@/utils/replace-with-persian-digits";

interface AddProps {
  size: number;
  weight: number;
}

const AddAmount: FC<AddProps> = ({ size, weight }) => {
  const [amount] = useState(0);

  return (
    <div>
      <div>
        <span className="text-[0.625rem] tracking-tight text-tesla-neutral-400">
          سایز:{" "}
        </span>
        <span className="text-[0.6875rem] font-semibold tracking-tight text-tesla-neutral-800">
          {replaceWithPersianDigits(size.toString())}
        </span>
      </div>

      <div className="mb-1">
        <span className="text-[0.625rem] tracking-tight text-tesla-neutral-400">
          وزن:{" "}
        </span>
        <span className="text-[0.625rem] tracking-tight text-tesla-neutral-800">
          {replaceWithPersianDigits(weight.toString()) + " "}
        </span>
        <span className="text-[0.5rem] tracking-tight text-tesla-neutral-800">
          گرم
        </span>
      </div>

      <div className="flex h-10 w-full items-center justify-center rounded-lg bg-tesla-rose-500 text-white">
        {amount > 0 ? <div /> : <Plus />}
      </div>
    </div>
  );
};

export default AddAmount;
