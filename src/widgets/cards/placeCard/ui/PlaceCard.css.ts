import { style } from "@vanilla-extract/css";

export const card = style({
  width: "22.625rem",
  height: "17.25rem",
  borderRadius: "1rem",
  background: "#fff",
  boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.10)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const imageWrapper = style({
  width: "100%",
  height: "10.125rem",
  overflow: "hidden",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const textArea = style({
  padding: "1rem 1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  flex: 1,
});

export const titleRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

/* pretendard/body_sb_16 */
// --black
export const name = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: "#111",
  display: "flex",
  alignItems: "center",
});

/* pretendard/body_r_12_2 */
// --gray900;
export const location = style({
  fontSize: "0.75rem",
  lineHeight: "0.875rem",
  color: "#333",
  whiteSpace: "nowrap",
});

export const tagsRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.25rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

/* pretendard/body_r_12_2 */
// --gray900;
export const tag = style({
  fontSize: "0.75rem",
  color: "#666",
});

export const bottomRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "0.25rem",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  fontSize: "0.75rem",
  color: "#333",
});

export const metaComment = style({
  marginLeft: "0.5rem",
});

export const metaLike = style({
  marginLeft: "0.44rem",
});

/* pretendard/head_sb_20 */
// --primary300
export const price = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#632DB8",
  gap: "0.25rem",
  display: "flex",
  alignItems: "center",
});

/* pretendard/body_r_12_2 */
// --gray900
export const priceUnit = style({
  fontSize: "0.75rem",
  fontWeight: 400,
  color: "#333",
});
