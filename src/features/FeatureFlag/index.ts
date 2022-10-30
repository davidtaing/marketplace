import { Fragment, ComponentType } from "react";

export const FeatureFlag = <T>(component: ComponentType<T>) => {
  if (process.env.NODE_ENV !== "production") return component;

  return Fragment;
};
