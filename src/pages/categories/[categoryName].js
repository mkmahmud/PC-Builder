import ProductCard from "@/component/ProductCard/ProductCard";
import RootLayout from "@/component/layout/RootLayout";
import React from "react";

const CategoryName = ({ product, searchedCatecory }) => {
  
  return (
    <div className="m-4 ">
      <h2>Your Searched Product is: <strong className="text-orange-400">{searchedCatecory} </strong></h2>
      <div className="grid md:grid-cols-4 gap-4">
        {product &&
          product?.map((prod) => (
            <ProductCard product={prod} key={prod._id}></ProductCard>
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
    `https://fokira-server-mahmudulmk4-gmailcom.vercel.app/categories/${params.categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
      searchedCatecory: params.categoryName
    },
  };
};
