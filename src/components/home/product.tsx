"use client";
import { type FC, useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Color } from "@/types/color";
import { Cart, Transport, Star } from "@/components/ui/icons";
import Autoplay from "embla-carousel-autoplay";
import replaceWithPersianDigits from "@/utils/replace-with-persian-digits";
import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";

interface ProductColor {
  color: Color;
  image?: StaticImageData;
  notification?: boolean;
}

interface Product {
  id: number;
  name: string;
  images: StaticImageData[];
  colors: ProductColor[];
  score: number;
}

const Product: FC<Product> = ({ name, images, colors, score }) => {
  const [imageCarousel, setImageCarousel] = useState<CarouselApi>();
  const [imageCarouselIndex, setImageCarouselIndex] = useState(0);

  const updateImageCarouselIndex = useCallback(() => {
    setImageCarouselIndex(imageCarousel?.selectedScrollSnap() ?? 0);
  }, [imageCarousel]);

  useEffect(() => {
    if (!imageCarousel) return;
    updateImageCarouselIndex();
    imageCarousel.on("select", updateImageCarouselIndex);
    return () => {
      imageCarousel.off("select", updateImageCarouselIndex);
    };
  }, [imageCarousel, updateImageCarouselIndex]);

  const [colorCarousel, setColorCarousel] = useState<CarouselApi>();
  const [colorCarouselCanScroll, setColorCarouselCanScroll] = useState({
    right: false,
    left: true,
  });

  const updateColorCarouselCanScroll = useCallback(() => {
    setColorCarouselCanScroll({
      right: colorCarousel?.canScrollPrev() ?? false,
      left: colorCarousel?.canScrollNext() ?? true,
    });
  }, [colorCarousel]);

  useEffect(() => {
    if (!colorCarousel) return;
    updateColorCarouselCanScroll();
    colorCarousel.on("select", updateColorCarouselCanScroll);
    return () => {
      colorCarousel.off("select", updateColorCarouselCanScroll);
    };
  }, [colorCarousel, updateColorCarouselCanScroll]);

  return (
    <div className="p-1 pt-6">
      <Carousel
        className="relative mb-2 overflow-hidden rounded-md"
        setApi={setImageCarousel}
        opts={{
          direction: "rtl",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <Image
          src={images[0]}
          className="absolute inset-0 z-0 blur-3xl"
          alt={name}
        />
        <CarouselContent className="relative z-10 -ml-0">
          {images.map((image, index) => (
            <CarouselItem className="pl-0" key={index}>
              <Image src={image} alt={name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 top-auto z-20 flex items-end justify-between p-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_0_8px] shadow-black/[0.16]">
            <Cart />
          </div>
          <div className="flex gap-[0.125rem]">
            {images.map((_image, index) => (
              <div
                className={`h-1 w-1 rounded-full border border-tesla-neutral-900 transition-colors ${imageCarouselIndex === index ? "bg-tesla-neutral-900" : "bg-white"}`}
                key={index}
              />
            ))}
          </div>
        </div>
      </Carousel>
      <div className="mb-[0.625rem] line-clamp-2 text-[0.6875rem] font-semibold">
        {name}
      </div>
      <Carousel
        className="relative mb-[0.375rem]"
        setApi={setColorCarousel}
        opts={{
          direction: "rtl",
          dragFree: true,
        }}
      >
        <CarouselContent className="-ml-2">
          {colors.map((color, index) => (
            <CarouselItem className="basis-auto pl-2" key={index}>
              <div className="h-5 w-5 rounded-full border border-tesla-neutral-300">
                <div
                  className="h-full w-full rounded-full border border-white"
                  style={{ backgroundColor: color.color }}
                ></div>
              </div>
              {color.notification && (
                <div className="mx-auto mt-[0.1875rem] h-[0.1875rem] w-[0.1875rem] rounded-full bg-blue-500" />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity ${colorCarouselCanScroll.right ? "" : "opacity-0"}`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent transition-opacity ${colorCarouselCanScroll.left ? "" : "opacity-0"}`}
        />
      </Carousel>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-tesla-green-600">
          <Transport />
          <div className="text-[0.625rem] font-semibold tracking-tight">
            ارسال رایگان
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[0.625rem] font-semibold">
            {replaceWithPersianDigits(score.toString())}
          </div>
          <Star className="text-tesla-amber-400" />
        </div>
      </div>
    </div>
  );
};

export default Product;

/* TODOs:
. replace indexes with proper keys
. separate client components from server components
*/
