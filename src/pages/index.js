import Hero from "@/component/Hero/Hero";
import RootLayout from "@/component/layout/RootLayout";
import ProductCard from "@/component/ProductCard/ProductCard";
import { Button } from "antd";
import Link from "next/link";

export default function HomePage({ products, category }) {
  // Slice the products array to get only the first 8 products
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <Hero></Hero>
      <div className="featuredProduct px-4 py-2">
        <h2>Featured Product</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 my-4">
          {category &&
            category?.map((cate) => (
              <Button type="dashed" ghost key={cate._id}>
                <Link
                  rel="noopener noreferrer"
                  href={`categories/${cate.Category}`}
                >
                  {cate.Category}
                </Link>
              </Button>
            ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Render only the first 8 products */}
          {featuredProducts &&
            featuredProducts?.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
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
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    const categoryres = await fetch("http://localhost:5000/categories");
    const categoryData = await categoryres.json();

    return {
      props: {
        products: data.data,
        category: categoryData.data,
      },
      revalidate: 10,
    };
  } catch {
    return {
      props: {},
    };
  }
};
