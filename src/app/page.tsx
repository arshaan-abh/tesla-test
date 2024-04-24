import type { FC } from "react";
import Product from "@/components/home/product";
import product from "/public/product.jpg";

const Products: Product[] = [
  {
    id: 0,
    name: "کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...",
    images: [product, product, product, product],
    colors: [
      { color: "#383837" },
      { color: "#865222" },
      { color: "#C5FBE4" },
      { color: "#D67777", notification: true },
      { color: "#323F35", notification: true },
      { color: "#323F35" },
      { color: "#323F35" },
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
      { color: "#383837", image: product },
      { color: "#865222", image: product },
      { color: "#C5FBE4", image: product },
      { color: "#D67777", image: product },
      { color: "#323F35", image: product },
      { color: "#323F35", image: product },
      { color: "#323F35", image: product },
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
      { color: "#383837" },
      { color: "#865222" },
      { color: "#C5FBE4" },
      { color: "#D67777" },
      { color: "#323F35" },
      { color: "#323F35" },
      { color: "#323F35" },
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
      { color: "#383837" },
      { color: "#865222" },
      { color: "#C5FBE4" },
      { color: "#D67777" },
      { color: "#323F35" },
      { color: "#323F35" },
      { color: "#323F35" },
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

const Home: FC = () => {
  return (
    <div className="grid grid-cols-2 p-4">
      {Products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
