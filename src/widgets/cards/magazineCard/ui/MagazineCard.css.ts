import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "34.375rem",
  height: "18.4375rem",
  borderRadius: "12px",
  overflow: "hidden",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});
