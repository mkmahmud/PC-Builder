import RootLayout from "@/component/layout/RootLayout";
import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import { Button } from "antd";
import PcBuilderComponent from "@/component/PcBuilderComponent/PcBuilderComponent";
import { useGetAllcategoriesQuery } from "@/redux/features/category/categoryApi";
import { useAppSelector } from "@/redux/hook";

const PcBuild = () => {
  const { data, isLoading, isError, error } =
    useGetAllcategoriesQuery(undefined);

  const pcComponents = useAppSelector((state) => state.pcComponent);
  console.log();

  return (
    <div className="pcBuild bg-white max-w-screen-lg m-2 p-4 rounded mx-auto text-black">
      <div>
        <Image src={logo} alt={logo} height={80} width={100}></Image>
      </div>
      <div className="flex justify-between items-center my-2">
        <p>PC Builder - Build your own PC - New Egg</p>

        {pcComponents?.pcComponents?.length == 7 ? (
          <Button type="primary">Build your PC</Button>
        ) : (
          <Button type="primary" disabled>
            Build your PC
          </Button>
        )}

        <Button>
          Total Ammount $<span>00</span>
        </Button>
      </div>
      <div>
        <h4 className="p-2 bg-gray-200 ">CORE COMPONENTS</h4>
        <div>
          {data?.data.map((da) => (
            <PcBuilderComponent key={da._id} data={da}></PcBuilderComponent>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PcBuild;

PcBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
