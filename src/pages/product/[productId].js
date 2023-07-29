import React from "react";
import { Badge, Descriptions, Card, Col, Row } from "antd";
import RootLayout from "@/component/layout/RootLayout";
import Image from "next/image";

const ProductDetails = ({ data }) => {
  const {
    Image: img,
    Description,
    KeyFeture,
    IndividualRating,
    Reviews,
    ProductName,
    Category,
    Price,
    Status,
    Rating,
  } = data;
  return (
    <div>
      <Image src={img} alt={img} height={400} width='500' className="block mx-auto py-4"></Image>
      <Descriptions
        title={ProductName}
        bordered
        style={{ background: "white", margin: "20px 10px", padding: "10px" }}
      >
        <Descriptions.Item label="Individual Rating">
          {IndividualRating}
        </Descriptions.Item>
        <Descriptions.Item label="Rating">{Rating}</Descriptions.Item>

        <Descriptions.Item label="Status" span={3}>
          <Badge
            color={Status ? "green" : "red"}
            text={Status ? "In Stock" : "Stock Out"}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Price">${Price}.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$00.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">
          ${Price}.00
        </Descriptions.Item>
        <Descriptions.Item label="Key Fetures">
          {KeyFeture && KeyFeture.map((feture) => <p>{feture}</p>)}
        </Descriptions.Item>
        <Descriptions.Item label="Reviews">
          {Reviews &&
            Reviews.map((review) => (
              <Col span={8}>
                <Card title={review.name} bordered={false}>
                  {review.comment}
                </Card>
              </Col>
            ))}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
