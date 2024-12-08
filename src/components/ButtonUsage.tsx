import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage() {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "#333" } }}
    >
      Hello World
    </Button>
  );
}
