import React from "react";
import { Box } from "@mui/system";

import MainVisual from "./MainVisual";
import Recommendation from "./Recommendation";

export default function Landing() {
  return (
    <Box sx={{ p: "24px 24px 24px 378px" }}>
      <MainVisual />
      <Recommendation />
    </Box>
  );
}
