import type { FC } from "react";
import { Cart } from "@/components/ui/icons";
import AddAmount from "@/components/home/add-amount";
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
          <DrawerDescription className="grid grid-cols-3 gap-11">
            <AddAmount size={1} weight={3.1} />
            <AddAmount size={2} weight={3.1} />
            <AddAmount size={3} weight={3.1} />
            <AddAmount size={4} weight={3.1} />
            <AddAmount size={5} weight={3.1} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>بستن</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddToCart;
