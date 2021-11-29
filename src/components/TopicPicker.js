import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";

const mapTypeToTitle = {
  history: "歷史文化",
  hotel: "住宿推薦",
  family: "親子活動",
  food: "美式饗宴",
  outing: "戶外踏青",
  religion: "宗教巡禮",
  scenery: "風景區",
  travel: "觀光活動",
};

const mapTypeToSymbol = {
  history: "ꀝ",
  hotel: "ꀕ",
  family: "ꁂ",
  food: "ꁈ",
  outing: "ꀽ",
  religion: "ꀓ",
  scenery: "ꀫ",
  travel: "ꀷ",
};

export default function TopicPicker() {
  return (
    <>
      <Typography variant="h6" component="h4">
        精選主題
      </Typography>
      <Grid container mt={1} spacing={2}>
        <GridItem type="history" color="#3FB195" />
        <GridItem type="outing" color="#C499FF" />
        <GridItem type="religion" color="#FF9999" />
        <GridItem type="family" color="#64C5E3" />
        <GridItem type="scenery" color="#81A4FF" />
        <GridItem type="food" color="#FD975E" />
        <GridItem type="hotel" color="#C17B53" />
        <GridItem type="travel" color="#8FCA6B" />
      </Grid>
    </>
  );
}

const GridItem = (props) => (
  <Grid
    container
    item
    mobile={6}
    direction="column"
    sx={{ alignItems: "center" }}
  >
    <TopicButton {...props} />
    <Typography variant="body1" component="span">
      {mapTypeToTitle[props.type]}
    </Typography>
  </Grid>
);

const TopicButton = (props) => (
  <IconButton
    sx={{
      p: 0,
      width: 70,
      height: 70,
      fontFamily: "twicon",
      fontSize: 50,
      color: "#fff",
      bgcolor: props.color,
      "&:hover": {
        bgcolor: props.color,
        filter: "brightness(0.9)",
      },
    }}
  >
    {mapTypeToSymbol[props.type]}
  </IconButton>
);
