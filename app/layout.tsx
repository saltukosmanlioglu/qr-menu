"use client";
import React from "react";
import Link from "next/link";

import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";
import {
  AtlassianNavigation,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
import { ConfluenceIcon, ConfluenceLogo } from "@atlaskit/logo";
import { LinkItem, Section } from "@atlaskit/menu";
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

import "@/styles/globals.css";

import { menuItems } from "./constants";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <PageLayout>
          <TopNavigation
            isFixed={true}
            id="confluence-navigation"
            skipLinkTitle="Confluence Navigation"
          >
            <AtlassianNavigation
              label="site"
              moreLabel="More"
              primaryItems={[]}
              renderProductHome={() => (
                <ProductHome icon={ConfluenceIcon} logo={ConfluenceLogo} />
              )}
              renderProfile={RenderProfile}
            />
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
              <div className="pl-20 pr-20 pt-10 pb-10">{children}</div>
            </Main>
          </Content>
        </PageLayout>
      </body>
    </html>
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
                <Link key={subIndex} href={subItem.href}>
                  <LinkItem>{subItem.text}</LinkItem>
                </Link>
              ))}
            </NestingItem>
          ))}
        </Section>
      </NestableNavigationContent>
    </SideNavigation>
  );
};

const RenderProfile = () => {
  return (
    <div>
      <DropdownMenu trigger="Orient" zIndex={1000000}>
        <DropdownItemGroup>
          <DropdownItem>Çıkış yap</DropdownItem>
        </DropdownItemGroup>
      </DropdownMenu>
    </div>
  );
};
