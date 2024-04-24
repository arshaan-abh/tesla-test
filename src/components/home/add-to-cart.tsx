import type { FC } from "react";
import { Cart } from "@/components/ui/icons";
import AddAmount from "@/components/home/add-amount";
import Image from "next/image";
import gold from "/public/gold.png";
import copper from "/public/copper.png";
import silver from "/public/silver.png";
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

interface AddToBasketProps {
  id: number;
}

const AddToCart: FC<AddToBasketProps> = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_0_8px] shadow-black/[0.16]">
        <Cart />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>انتخاب تعداد و اندازه مدنظر:</DrawerTitle>
          <DrawerDescription>
            <div className="grid grid-cols-3 gap-x-11 gap-y-4">
              <AddAmount size={1} weight={3.1} />
              <AddAmount size={2} weight={3.1} />
              <AddAmount size={3} weight={3.1} />
              <AddAmount size={4} weight={3.1} />
              <AddAmount size={5} weight={3.1} />
            </div>
            <div className="h-20" />
            <div className="mb-4 flex items-center gap-3">
              <div className="text-sm font-semibold tracking-tight">رنگ:</div>

              <div className="flex grow justify-between gap-1 rounded-full bg-tesla-neutral-50 p-1">
                <div className="relative flex gap-1 rounded-full bg-tesla-neutral-100 px-3 py-2">
                  <Image src={gold} alt="Gold" />
                  <div className="text-xs tracking-tight text-tesla-neutral-400">
                    زرد
                  </div>
                </div>

                <div className="relative flex gap-1 rounded-full bg-white px-3 py-2 shadow-[0_0_4px] shadow-black/[0.16]">
                  <Image src={copper} alt="Copper" />
                  <div className="text-xs tracking-tight text-tesla-neutral-400">
                    رزگلد
                  </div>
                  <div className="absolute inset-x-0 -bottom-[0.625rem] mx-auto h-1 w-1 rounded-full bg-tesla-blue-500" />
                </div>

                <div className="relative flex gap-1 rounded-full bg-tesla-neutral-100 px-3 py-2">
                  <Image src={silver} alt="Silver" />
                  <div className="text-xs tracking-tight text-tesla-neutral-400">
                    سفید
                  </div>
                </div>
              </div>
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

export default AddToCart;
