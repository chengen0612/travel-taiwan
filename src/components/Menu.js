import React from "react";
import { Paper, ButtonBase, Divider } from "@mui/material";
import { styled, Box } from "@mui/system";

import SearchForm from "./SearchForm";
import TopicPicker from "./TopicPicker";

import logo from "../assets/logo.png";

const styles = { gap: 2.4 };

export default function Menu() {
  return (
    <Paper
      elevation={3}
      sx={{
        px: 2.4,
        pb: 3,
        width: 354,
        position: "fixed",
        top: 0,
        bottom: 0,
        overflowY: "scroll",
      }}
    >
      <Box mt={4}>
        <ButtonBase LinkComponent="a" href="/" disableRipple>
          <Logo src={logo} alt="logo" />
        </ButtonBase>
      </Box>
      <SearchForm />
      <Divider sx={{ my: styles.gap }} />
      <TopicPicker />
    </Paper>
  );
}

const Logo = styled("img")({
  width: 116.5,
});
