import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";

import heroImage from "../assets/hero-image.png";

const classes = {
  root: {
    pl: 4,
    pr: 1,
    display: "flex",
    alignItems: "center",
    height: 335,
    "*": {
      flex: "1 1 0",
    },
  },
  heading: {
    fontWeight: 700,
  },
};

export default function MainVisual() {
  return (
    <Paper component="main" sx={classes.root}>
      <Typography variant="h2" component="h1" sx={classes.heading}>
        探索。
        <br />
        福爾摩沙
      </Typography>
      <Img src={heroImage} alt="hero-image" />
    </Paper>
  );
}

const Img = styled("img")({
  width: "50%",
  alignSelf: "flex-end",
});
