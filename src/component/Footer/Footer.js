import React from "react";
import { Layout } from "antd";

const { Footer: MyFooter } = Layout;

const Footer = () => {
  return (
    <MyFooter style={{ textAlign: "center" }}>
      PC Builder ©2023 Created by PC Builder
    </MyFooter>
  );
};

export default Footer;
