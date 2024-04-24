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
    score: 4.8,
    priceWithDiscount: 80000000,
    priceWithoutDiscount: 120000000,
    discountPercent: 20,
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
