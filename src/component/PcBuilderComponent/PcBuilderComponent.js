import { Button } from "antd";
import Link from "next/link";
import React from "react";

const PcBuilderComponent = ({ data }) => {
  const { Category } = data;
  return (
    <div className="flex justify-between items-center border my-2 bg-gray-100 p-2 rounded ">
      <div className="flex items-center">
        <h3>{Category}</h3> &nbsp; <span> *</span>
      </div>
      <div>
        <Button type="primary">
          <Link href={`/selectproduct/${Category}`}>Choose</Link>
        </Button>
      </div>
    </div>
  );
};

export default PcBuilderComponent;
