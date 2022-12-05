import React, { FC } from "react";
import { Box } from "@mui/material";

export const Image: FC = () => {
  const imageUrl = "https://picsum.photos/534/383.jpg";

  return (
    <>
      <Box
        component="img"
        px={{
          xs: 3,
          md: 0,
        }}
        src={imageUrl}
        alt="img"
        sx={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "200px 20px 100px 50px",
        }}
      ></Box>
    </>
  );
};
