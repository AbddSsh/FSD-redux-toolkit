import { Skeleton } from "@mui/material";

export const CategoriesBlockSkeleton = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "1fr / 1fr 1fr 0.3fr",
        gap: "20px",
        margin: "0px 20px",
      }}
    >
      <Skeleton
        animation="wave"
        width={"100%"}
        height={"50px"}
        style={{ padding: "20px", borderRadius: "10px", margin: "0 auto" }}
      />
      <Skeleton
        animation="wave"
        width={"100%"}
        height={"50px"}
        style={{ padding: "20px", borderRadius: "10px" }}
      />
      <Skeleton
        animation="wave"
        width={"100%"}
        height={"50px"}
        style={{ padding: "20px", borderRadius: "10px 0px 0px 10px" }}
      />
    </div>
  );
};
