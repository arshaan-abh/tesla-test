import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/ui/icons";
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
          <DrawerTitle>اضافه کردن به سبد خرید</DrawerTitle>
          <DrawerDescription>اضافه کردن به سبد خرید</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>اضافه کن</Button>
          <DrawerClose>
            <Button variant="outline">پشیمون شدم</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddToCart;
