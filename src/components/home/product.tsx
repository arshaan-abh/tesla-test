"use client";
import { type FC, useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Color } from "@/types/color";
import { Transport, Star, OpenBox, Clock, Bell } from "@/components/ui/icons";
import AddToCart from "@/components/home/add-to-cart";
import Autoplay from "embla-carousel-autoplay";
import addCommas from "@/utils/add-commas";
import replaceWithPersianDigits from "@/utils/replace-with-persian-digits";
import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";

const lowStockThreshold = 10;

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
  freeTransport?: boolean;
  stock: number;
  score: number;
  price: number;
  priceWithoutDiscount?: number;
  discountPercent?: number;
  discountDeadline?: string;
}

const Product: FC<Product> = ({
  id,
  name,
  images,
  colors,
  freeTransport,
  stock,
  score,
  price,
  priceWithoutDiscount,
  discountPercent,
  discountDeadline,
}) => {
  const [selectedColor, setSelectedColor] = useState(-1);

  const selectColor = useCallback(
    (index: number) => {
      if (index === selectedColor) setSelectedColor(-1);
      else setSelectedColor(index);
    },
    [selectedColor],
  );

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
    <div className="p-1">
      {discountDeadline ? (
        <div className="mb-1 flex h-4 items-center justify-between gap-1 text-tesla-rose-600">
          <div className="text-[0.625rem] font-bold">شگفت انگیز</div>
          <div className="text-[0.625rem] font-bold">
            {replaceWithPersianDigits(discountDeadline.toString())}
          </div>
        </div>
      ) : (
        <div className="h-5" />
      )}
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
          {stock > 0 ? <AddToCart id={id} /> : <div />}
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
      <div className="mb-[0.625rem] line-clamp-2 h-[2lh] text-[0.6875rem] font-semibold">
        {name}
      </div>
      {stock > 0 ? (
        <>
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
                  <div
                    className={`h-5 w-5 rounded-full border ${selectedColor === index ? "border-tesla-rose-600" : "border-tesla-neutral-300"}`}
                    onClick={() => {
                      selectColor(index);
                    }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white"
                      style={{ backgroundColor: color.color }}
                    >
                      {color.image && (
                        <Image src={color.image} alt={color.color} />
                      )}
                    </div>
                  </div>
                  {color.notification ? (
                    <div className="mx-auto mt-[0.1875rem] h-[0.1875rem] w-[0.1875rem] rounded-full bg-tesla-blue-500" />
                  ) : (
                    <div className="mt-[0.1875rem] h-[0.1875rem]" />
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
          <div className="mb-1 flex items-center justify-between gap-1">
            {stock <= lowStockThreshold ? (
              <div className="flex gap-1 text-tesla-rose-600">
                <OpenBox />
                <div className="text-[0.625rem] font-semibold tracking-tight">
                  تنها {replaceWithPersianDigits(stock.toString())} عدد در انبار
                  باقی مانده
                </div>
              </div>
            ) : freeTransport ? (
              <div className="flex gap-1 text-tesla-green-600">
                <Transport />
                <div className="text-[0.625rem] font-semibold tracking-tight">
                  ارسال رایگان
                </div>
              </div>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-1">
              <div className="text-[0.625rem] font-semibold">
                {replaceWithPersianDigits(score.toString())}
              </div>
              <Star className="text-tesla-amber-400" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={`text-sm font-semibold tracking-tight ${discountPercent ? "text-tesla-rose-600" : ""}`}
            >
              {addCommas(replaceWithPersianDigits(price.toString()))}
            </div>
            <div className="text-[0.5rem] font-semibold">تومان</div>
          </div>
          {priceWithoutDiscount && discountPercent && (
            <div className="flex items-center gap-1">
              <div className="text-xs font-semibold tracking-tight text-tesla-neutral-300 line-through">
                {addCommas(
                  replaceWithPersianDigits(priceWithoutDiscount.toString()),
                )}
              </div>
              <div className="text-xs font-bold text-tesla-rose-600">
                %{replaceWithPersianDigits(discountPercent.toString())}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-1 flex items-center gap-1 text-tesla-neutral-400">
            <Clock />
            <div className="text-xs font-semibold tracking-tight">
              به زودی...
            </div>
          </div>
          <div className="flex items-center gap-1 text-tesla-blue-500">
            <Bell />
            <div className="text-xs font-semibold tracking-tight">
              موجود شد خبرم کن
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

/* TODOs:
. replace indexes with proper keys
. separate client components from server components
. implement discount deadline
*/
