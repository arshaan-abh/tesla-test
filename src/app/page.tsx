import type { FC } from "react";
import Product from "@/components/home/product";
import products from "@/constants/products";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-2 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
