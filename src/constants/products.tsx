import Product from "@/components/home/product";
import product from "/public/product.jpg";
import gold from "/public/gold.png";
import copper from "/public/copper.png";
import silver from "/public/silver.png";

const products: Product[] = [
  {
    id: 0,
    name: "کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...",
    images: [product, product, product, product],
    colors: [
      { code: "#383837" },
      { code: "#865222" },
      { code: "#C5FBE4" },
      { code: "#D67777", notification: true },
      { code: "#323F35", notification: true },
      { code: "#323F35" },
      { code: "#323F35" },
    ],
    colors2: [
      { name: "زرد", image: gold },
      { name: "رزگلد", image: copper },
      { name: "سفید", image: silver },
    ],
    freeTransport: true,
    stock: 11,
    score: 4.8,
    price: 80000000,
    priceWithoutDiscount: 120000000,
    discountPercent: 20,
  },
  {
    id: 1,
    name: "کراپ‌تاپ آستین بلند زنانه",
    images: [product, product, product, product],
    colors: [
      { code: "#383837", image: product },
      { code: "#865222", image: product },
      { code: "#C5FBE4", image: product },
      { code: "#D67777", image: product },
      { code: "#323F35", image: product },
      { code: "#323F35", image: product },
      { code: "#323F35", image: product },
    ],
    colors2: [
      { name: "زرد", image: gold },
      { name: "رزگلد", image: copper },
      { name: "سفید", image: silver },
    ],
    freeTransport: true,
    stock: 5,
    score: 4.8,
    price: 120000000,
  },
  {
    id: 2,
    name: "کراپ‌تاپ آستین بلند زنانه",
    images: [product, product, product, product],
    colors: [
      { code: "#383837" },
      { code: "#865222" },
      { code: "#C5FBE4" },
      { code: "#D67777" },
      { code: "#323F35" },
      { code: "#323F35" },
      { code: "#323F35" },
    ],
    colors2: [
      { name: "زرد", image: gold },
      { name: "رزگلد", image: copper },
      { name: "سفید", image: silver },
    ],
    stock: 0,
    score: 4.8,
    price: 120000000,
  },
  {
    id: 3,
    name: "کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...",
    images: [product, product, product, product],
    colors: [
      { code: "#383837" },
      { code: "#865222" },
      { code: "#C5FBE4" },
      { code: "#D67777" },
      { code: "#323F35" },
      { code: "#323F35" },
      { code: "#323F35" },
    ],
    colors2: [
      { name: "زرد", image: gold },
      { name: "رزگلد", image: copper },
      { name: "سفید", image: silver },
    ],
    freeTransport: true,
    stock: 11,
    score: 4.8,
    price: 80000000,
    priceWithoutDiscount: 120000000,
    discountPercent: 20,
    discountDeadline: "02:24:36",
  },
];

export default products;
