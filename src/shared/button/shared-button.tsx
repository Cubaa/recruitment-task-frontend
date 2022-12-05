import React, { FC } from "react";
import { Typography, Button } from "@mui/material";
import { SharedButtonProps } from "./shared-button.interface";

export const SharedButton: FC<SharedButtonProps> = (props) => {
  const { name, variant, style, clickFn } = props;

  return (
    <Button variant={variant} onClick={clickFn} sx={style}>
      <Typography variant="button">{name}</Typography>
    </Button>
  );
};
