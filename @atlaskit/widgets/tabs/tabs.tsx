"use client";
import React, { useState } from "react";
import AtlassianTabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";

import { TabsProps } from "./types";

const Tabs: React.FunctionComponent<TabsProps> = ({
  childrens,
  storageName,
  tabs,
}) => {
  const [activeIndex, setActiveIndex] = useState(
    Number(sessionStorage.getItem(storageName)) || 0
  );

  const onTabClick = (index: number) => {
    sessionStorage.setItem(storageName, String(index));
    setActiveIndex(index);
  };

  return (
    <AtlassianTabs
      id="default"
      onChange={(index) => setActiveIndex(index)}
      selected={activeIndex}
    >
      <TabList>
        {tabs.map((tab, index) => (
          <Tab key={index}>
            <div
              onClick={() => onTabClick(index)}
              className="flex items-center"
            >
              {tab.icon}
              <p className="ml-1">{tab.title}</p>
            </div>
          </Tab>
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
