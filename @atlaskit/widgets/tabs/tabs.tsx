"use client";
import React from "react";
import AtlassianTabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";

import { TabsProps } from "./types";

const Tabs: React.FunctionComponent<TabsProps> = ({ childrens, tabs }) => {
  return (
    <AtlassianTabs id="default">
      <TabList>
        {tabs.map(
          (tab, index) =>
            tab.visible && (
              <Tab key={index}>
                <div className="flex items-center">
                  {tab.icon}
                  <p className="ml-1">{tab.title}</p>
                </div>
              </Tab>
            )
        )}
      </TabList>
      {childrens.map(
        (children, index) =>
          children.visible && (
            <TabPanel key={index}>
              <div className="w-full p-16">{children.component}</div>
            </TabPanel>
          )
      )}
    </AtlassianTabs>
  );
};

export default Tabs;
