import { Skeleton } from "@mui/material";

export const AdvBlockSkeleton = () => {
  return (
    <div
      style={{ display: "grid", gridTemplate: "1fr / 1fr 0.2fr", gap: "20px" }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        style={{
          borderRadius: "20px",
          height: "35vw",
          maxHeight: "200px",
          width: "100%",
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        style={{
          borderRadius: "20px 0px 0px 20px",
          height: "35vw",
          maxHeight: "200px",
          width: "100%",
        }}
      />
    </div>
  );
};
