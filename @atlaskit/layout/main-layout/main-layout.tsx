"use client";
import React, { useState } from "react";

import {
  AtlassianNavigation,
  Help,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
import { ConfluenceIcon, ConfluenceLogo } from "@atlaskit/logo";
import { ButtonItem, LinkItem, MenuGroup, Section } from "@atlaskit/menu";
import Popup from "@atlaskit/popup";
import {
  Header,
  NavigationHeader,
  NestableNavigationContent,
  NestingItem,
  SideNavigation,
} from "@atlaskit/side-navigation";

import {
  Content,
  LeftSidebar,
  Main,
  PageLayout,
  TopNavigation,
} from "@atlaskit/page-layout";

import { MainLayoutProps } from "./types";
import { menuItems } from "./constants";

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <PageLayout>
      <TopNavigation
        isFixed={true}
        id="confluence-navigation"
        skipLinkTitle="Confluence Navigation"
      >
        <TopNavigationContents />
      </TopNavigation>
      <Content testId="content">
        <LeftSidebar
          width={200}
          id="project-navigation"
          skipLinkTitle="Project Navigation"
          testId="left-sidebar"
        >
          <SideNavigationContent />
        </LeftSidebar>
        <Main id="main-content" skipLinkTitle="Main Content">
          {children}
        </Main>
      </Content>
    </PageLayout>
  );
};

function TopNavigationContents() {
  return (
    <AtlassianNavigation
      label="site"
      moreLabel="More"
      primaryItems={[]}
      renderProductHome={() => (
        <ProductHome icon={ConfluenceIcon} logo={ConfluenceLogo} />
      )}
      renderHelp={HelpPopup}
    />
  );
}

const SideNavigationContent = () => {
  return (
    <SideNavigation label="Project navigation" testId="side-navigation">
      <NavigationHeader>
        <Header description="Menü">QR Menu Yönetim Paneli</Header>
      </NavigationHeader>
      <NestableNavigationContent initialStack={[]}>
        <Section>
          {menuItems.map((item, index) => (
            <NestingItem
              key={index}
              id={String(index)}
              iconBefore={item.icon}
              title={item.title}
            >
              {item.subItems.map((subItem, subIndex) => (
                <LinkItem key={subIndex} href={subItem.href}>
                  {subItem.text}
                </LinkItem>
              ))}
            </NestingItem>
          ))}
        </Section>
      </NestableNavigationContent>
    </SideNavigation>
  );
};

export const HelpPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Popup
      placement="bottom-start"
      content={HelpPopupContent}
      isOpen={isOpen}
      onClose={onClose}
      trigger={(triggerProps) => (
        <Help
          isSelected={isOpen}
          onClick={onClick}
          tooltip="Help"
          {...triggerProps}
        />
      )}
    />
  );
};

const HelpPopupContent = () => (
  <MenuGroup>
    <Section title={"Menu Heading"}>
      <ButtonItem>Item 1</ButtonItem>
      <ButtonItem>Item 2</ButtonItem>
      <ButtonItem>Item 3</ButtonItem>
      <ButtonItem>Item 4</ButtonItem>
    </Section>
    <Section title="Menu Heading with separator" hasSeparator>
      <ButtonItem>Item 5</ButtonItem>
      <ButtonItem>Item 6</ButtonItem>
    </Section>
  </MenuGroup>
);

export default MainLayout;
