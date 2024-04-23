"use client";
import { type FC, useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Color } from "@/types/color";
import { Cart } from "@/components/ui/icons";
import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";

interface ProductColor {
  color: Color;
  image?: StaticImageData;
}

interface Product {
  id: number;
  name: string;
  images: StaticImageData[];
  colors: ProductColor[];
}

const Product: FC<Product> = ({ name, images }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [imageIndex, setImageIndex] = useState(0);

  const updateImageIndex = useCallback(() => {
    setImageIndex(api?.selectedScrollSnap() ?? 0);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateImageIndex();
    api.on("select", updateImageIndex);
    return () => {
      api.off("select", updateImageIndex);
    };
  }, [api, updateImageIndex]);

  return (
    <div className="p-1 pt-6">
      <Carousel
        className="relative mb-2 overflow-hidden rounded-md"
        setApi={setApi}
      >
        <Image src={images[0]} className="absolute blur-3xl" alt={name} />
        <CarouselContent className="-ml-0" dir="ltr">
          {images.map((image, index) => (
            <CarouselItem className="pl-0" key={index} dir="rtl">
              <Image src={image} alt={name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 top-auto flex items-end justify-between p-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_0_8px] shadow-black/[0.16]">
            <Cart />
          </div>
          <div className="flex gap-[0.125rem]">
            {images.map((_image, index) => (
              <div
                className={`h-1 w-1 rounded-full border border-tesla-black transition-colors ${imageIndex === index ? "bg-tesla-black" : "bg-white"}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </Carousel>
      <div className="mb-[0.625rem] line-clamp-2 text-[0.6875rem] font-semibold">
        {name}
      </div>
    </div>
  );
};

export default Product;
