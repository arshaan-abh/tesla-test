import type { FC } from "react";
import Product from "@/components/home/product";
import product from "/public/product.jpg";

const Products: Product[] = [
  {
    id: 0,
    name: "کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...",
    images: [product, product, product, product],
    colors: [{ color: `#000000`, image: product }],
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
