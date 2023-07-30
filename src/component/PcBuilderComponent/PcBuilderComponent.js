import { useAppSelector } from "@/redux/hook";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import React from "react";

const PcBuilderComponent = ({ data }) => {
  const { Category } = data;
  const pcComponents = useAppSelector((state) => state.pcComponent);

  // Find the matched component
  const matchedComponent = pcComponents.pcComponents.find(
    (component) => component.Category === Category
  );

  return (
    <div>
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

      {matchedComponent ? (
        <Card title={matchedComponent?.ProductName} bordered={false}>
          <div className="flex justify-between items-center">
            <Image alt={matchedComponent?.Image} width={100} src={matchedComponent?.Image} />
            <h3 className="text-red-400">
              <strong>${matchedComponent?.Price}</strong>
            </h3>
          </div>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default PcBuilderComponent;
