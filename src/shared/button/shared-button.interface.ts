import { SxProps } from "@mui/material";

export interface SharedButtonProps {
  name: string;
  style: SxProps;
  variant: "text" | "outlined" | "contained" | undefined;
  clickFn: () => void;
}
