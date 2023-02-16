import React from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type ChildrenProps = {
  children: React.ReactNode;
};
