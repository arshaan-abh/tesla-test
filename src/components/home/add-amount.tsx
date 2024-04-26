import { FC, FormEvent, useState, useCallback } from "react";
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
  setAmount: (amount: number) => void;
}

const AddAmount: FC<AddAmountProps> = ({ amount, setAmount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectAmount = useCallback(
    (amount: number) => {
      setAmount(amount);
      setIsOpen(false);
    },
    [setAmount],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      setAmount(parseInt(formData.get("amount")?.toString() ?? "0"));
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="flex h-10 w-full items-center justify-center rounded-lg bg-tesla-rose-500 text-white">
        {amount > 0 ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold tracking-tight text-tesla-rose-500">
            {replaceWithPersianDigits(amount.toString())}
          </div>
        ) : (
          <Plus />
        )}
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
              <button
                className={
                  amount > 0 ? "text-tesla-rose-500" : "text-tesla-neutral-300"
                }
                onClick={() => {
                  selectAmount(0);
                }}
                disabled={amount <= 0}
              >
                <Trash />
              </button>
              {[...Array<null>(14)].map((_, index) => (
                <button
                  className="text-sm font-semibold tracking-tight"
                  onClick={() => {
                    selectAmount(index + 2);
                  }}
                  key={index}
                >
                  {replaceWithPersianDigits((index + 2).toString())}
                </button>
              ))}
            </div>
            <form
              onSubmit={onSubmit}
              className="mb-8 flex h-10 overflow-hidden rounded"
            >
              <input
                name="amount"
                type="number"
                placeholder="تعداد دلخواه"
                className="flex grow items-center bg-tesla-neutral-100 px-4 text-[0.625rem] tracking-tight"
                required
              />
              <button
                type="submit"
                className="flex items-center bg-tesla-rose-500 px-4 text-sm font-semibold tracking-tight text-white"
              >
                تایید
              </button>
            </form>
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
