import { type FC, useState, useRef, useCallback } from "react";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Cart } from "@/components/ui/icons";
import AddAmount from "@/components/home/add-amount";
import Image from "next/image";
import products from "@/constants/products";
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

interface AddToBasketProps {
  id: number;
}

const AddToCart: FC<AddToBasketProps> = ({ id }) => {
  const theProduct = useRef(products.find((product) => product.id === id));

  return (
    <Drawer>
      <DrawerTrigger className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_0_8px] shadow-black/[0.16]">
        <Cart />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>انتخاب تعداد و اندازه مدنظر:</DrawerTitle>
          <DrawerDescription>
            <Tabs defaultValue={theProduct.current?.colors2[0].name} dir="rtl">
              {theProduct.current?.colors2.map((color2, index) => (
                <TabsContent
                  className="grid grid-cols-3 gap-x-11 gap-y-4"
                  value={color2.name}
                  key={index}
                >
                  <Add id={id} size={1} weight={3.1} />
                  <Add id={id} size={2} weight={3.1} />
                  <Add id={id} size={3} weight={3.1} />
                  <Add id={id} size={4} weight={3.1} />
                  <Add id={id} size={5} weight={3.1} />
                </TabsContent>
              ))}
              <div className="h-20" />
              <div className="mb-4 flex items-center gap-3">
                <div className="text-sm font-semibold tracking-tight">رنگ:</div>
                <TabsList className="flex grow justify-between gap-1 rounded-full bg-tesla-neutral-50 p-1">
                  {theProduct.current?.colors2.map((color2, index) => (
                    <TabsTrigger
                      className="relative flex gap-1 rounded-full bg-tesla-neutral-100 px-3 py-2"
                      value={color2.name}
                      key={index}
                    >
                      <Image src={color2.image} alt={color2.name} />
                      <div className="text-xs tracking-tight text-tesla-neutral-400">
                        {color2.name}
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
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

interface AddProps {
  id: number;
  size: number;
  weight: number;
}

const Add: FC<AddProps> = ({ size, weight }) => {
  const [amount, setAmount] = useState(0);

  const setAmountAsProp = useCallback((amount: number) => {
    setAmount(amount);
  }, []);

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

      <AddAmount amount={amount} setAmount={setAmountAsProp} />
    </div>
  );
};
