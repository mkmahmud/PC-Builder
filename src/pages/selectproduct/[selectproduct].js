import ProductCard from "@/component/ProductCard/ProductCard";
import SelectProductCard from "@/component/ProductCard/SelectProductCard";
import RootLayout from "@/component/layout/RootLayout";
import React from "react";

const CategoryName = ({ product, searchedCatecory }) => {
  console.log(searchedCatecory);
  return (
    <div className="m-4 ">
      <h2>
        Your Searched Product is:{" "}
        <strong className="text-orange-400">{searchedCatecory} </strong>
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {product &&
          product?.map((prod) => (
            <SelectProductCard
              product={prod}
              key={prod._id}
            ></SelectProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryName;

CategoryName.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://fokira-server-mahmudulmk4-gmailcom.vercel.app/categories/${params.selectproduct}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
      searchedCatecory: params.selectproduct,
    },
  };
};
