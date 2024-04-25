import { FC, Dispatch, SetStateAction } from "react";
import { Plus } from "@/components/ui/icons";
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
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="p-2">بستن</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddAmount;
