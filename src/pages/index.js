import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/component/layout/RootLayout";
import ProductCard from "@/component/ProductCard/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ products }) {
  console.log(products);
  return (
    <div>
      <div className="featuredProduct px-4 py-2">
        <h2>Featured Product</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {products &&
            products?.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
