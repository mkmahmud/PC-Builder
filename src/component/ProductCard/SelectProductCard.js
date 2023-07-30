import React from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hook";
import { addComponent } from "@/redux/features/pcBuilder/pcBuilder";
import { useRouter } from "next/router";



const { Meta } = Card;
const SelectProductCard = ({ product }) => {
  const {
    _id,
    Image: img,
    ProductName,
    Category,
    Price,
    Status,
    Rating,
  } = product;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddComponent = () => {
    dispatch(addComponent(product));
    router.push("/pcbuild");


  };

  return (
    <Card
      hoverable
      style={{
        width: "100%",
        margin: "auto",
        position: "relative",
      }}
      
      className="w-[400px] md:w-[350px]"
      cover={<Image src={img} alt={img} height={200} width={200}></Image>}
    >
      <Meta title={ProductName} />
      <div className="flex justify-between items-center">
        <h3>
          <Link href={`/categories/${Category}`}>{Category}</Link>
        </h3>
        <h3 className="text-red-400">
          <strong>${Price}</strong>
        </h3>
      </div>
      <div className="">
        <h3 className="">Rating: {Rating}</h3>
        <h3 className=" ">
          {Status ? (
            <strong className="text-green-500">In Stock</strong>
          ) : (
            <strong className="text-red-500">Out of Stock</strong>
          )}
        </h3>
      </div>
      <Button
        onClick={handleAddComponent}
        type="primary"
        size="large "
        className="w-full"
      >
        Add To Builder
      </Button>
    </Card>
  );
};
export default SelectProductCard;
