import { Box } from "@mui/material";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  display?:
    | "flex"
    | "inline"
    | "block"
    | "grid"
    | "inline-block"
    | "inline-flex"; // Restrict display options
  flexDirection?: "row" | "column";
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  width?:
    | {
        sm?: string;
        md?: string;
        lg?: string;
      }
    | string;
  height?:
    | {
        sm?: string;
        md?: string;
        lg?: string;
      }
    | string;
  maxWidth?:
    | {
        sm?: string;
        md?: string;
        lg?: string;
      }
    | string;
  position?: "relative" | "absolute" | "fixed" | "sticky";
  minHeight?:
    | {
        sm?: string;
        md?: string;
        lg?: string;
      }
    | string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  display = "flex", // Default display to 'flex'
  flexDirection = "row",
  padding,
  margin = "auto",
  border = "1px solid #C0C0C0",
  borderRadius = "5px",
  backgroundColor,
  width,
  height = "auto",
  maxWidth,
  position,
  minHeight,
}) => {
  return (
      <Box
        sx={{
          display, // Set display property
          flexDirection,
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          borderRadius,
          padding,
          margin,
          border,
          overflow: "hidden",
          width,
          height,
          maxWidth,
          position,
          minHeight,
          backgroundColor,
        }}
      >
        {children}
      </Box>
  );
};

export default Wrapper;
