import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "../widget/Widget";
const Index = () => {
  return (
    <>
      <Widget
        icon={<MdBarChart className="h-7 w-7" />}
        title={"Earnings"}
        subtitle={"$340.5"}
      />
      <Widget
        icon={<IoDocuments className="h-6 w-6" />}
        title={"Spend this month"}
        subtitle={"$642.39"}
      />
      <Widget
        icon={<MdBarChart className="h-7 w-7" />}
        title={"Sales"}
        subtitle={"$574.34"}
      />
      <Widget
        icon={<MdDashboard className="h-6 w-6" />}
        title={"Your Balance"}
        subtitle={"$1,000"}
      />
      <Widget
        icon={<MdBarChart className="h-7 w-7" />}
        title={"New Tasks"}
        subtitle={"145"}
      />
      <Widget
        icon={<IoMdHome className="h-6 w-6" />}
        title={"Total Projects"}
        subtitle={"$2433"}
      />
    </>
  );
};

export default Index;
