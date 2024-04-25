import { FC, Dispatch, SetStateAction } from "react";
import { Plus, Trash } from "@/components/ui/icons";
import replaceWithPersianDigits from "@/utils/replace-with-persian-digits";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface AddAmountProps {
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

const AddAmount: FC<AddAmountProps> = ({ amount }) => {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-10 w-full items-center justify-center rounded-lg bg-tesla-rose-500 text-white">
        {amount > 0 ? <div /> : <Plus />}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="mb-[0.125rem]">انتخاب تعداد مد نظر</div>
            <div className="text-[0.625rem] tracking-tight text-tesla-neutral-400">
              تعداد مدنظر را از لیست انتخاب و یا در کادر، عدد دلخواه را وارد و
              تایید نمایید
            </div>
          </DrawerTitle>
          <DrawerDescription>
            <div className="mb-6 grid grid-cols-5 gap-x-px gap-y-4 bg-tesla-neutral-100 *:flex *:justify-center *:bg-white *:shadow-[0_1rem_white]">
              <div className="text-tesla-neutral-300">
                <Trash />
              </div>
              {[...Array<null>(14)].map((_, index) => (
                <div
                  className="text-sm font-semibold tracking-tight"
                  key={index}
                >
                  {replaceWithPersianDigits((index + 2).toString())}
                </div>
              ))}
            </div>
            <div className="mb-8 flex h-10 overflow-hidden rounded">
              <input
                type="number"
                placeholder="تعداد دلخواه"
                className="flex grow items-center bg-tesla-neutral-100 px-4 text-[0.625rem] tracking-tight"
              />
              <button className="flex items-center bg-tesla-rose-500 px-4 text-sm font-semibold tracking-tight text-white">
                تایید
              </button>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="p-2">بستن</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddAmount;
