import { base as baseSpacing } from "./spacing";

export const base = {
  flex: 1,
  alignItems: "center",
  marginLeft: baseSpacing,
  marginRight: baseSpacing
};

export const centered = {
  ...base,
  justifyContent: "center"
};
