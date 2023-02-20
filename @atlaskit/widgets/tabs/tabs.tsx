"use client";
import React from "react";

import AtlassianTabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";

import { TabsProps } from "./types";

const Tabs: React.FunctionComponent<TabsProps> = ({ childrens, tabs }) => {
  return (
    <AtlassianTabs
      onChange={(index) => console.log("Selected Tab", index + 1)}
      id="default"
    >
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>{tab.title}</Tab>
        ))}
      </TabList>
      {childrens.map((children, index) => (
        <TabPanel key={index}>
          <div className="w-full p-16">{children.component}</div>
        </TabPanel>
      ))}
    </AtlassianTabs>
  );
};

export default Tabs;
