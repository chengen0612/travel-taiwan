import React from "react";
import { Box } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import RecommendIcon from "@mui/icons-material/Recommend";

import CardInfo from "./CardInfo";

import sapporo from "../assets/sapporo.jpg";

const classes = {
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recommendIcon: {
    mr: 1,
    width: 24,
    color: "#C499FF",
    transform: "translateY(3px)",
  },
  topic: { display: "inline-block", fontWeight: 700 },
  flexBox: {
    mt: 1.6,
    display: "flex",
    columnGap: 2.4,
    "> *": {
      flex: "1 1 0",
    },
  },
  card: {
    borderRadius: "16px",
  },
};

export default function Recommendation() {
  return (
    <Box component="section" mt={4}>
      <Heading />
      <Box sx={classes.flexBox}>
        {Array(3)
          .fill(0)
          .map((v, i) => (
            <SceneryCard key={i} />
          ))}
      </Box>
    </Box>
  );
}

const Heading = () => (
  <Box sx={classes.heading}>
    <Box>
      <RecommendIcon sx={classes.recommendIcon} />
      <Typography variant="h5" component="h2" sx={classes.topic}>
        熱門景點
      </Typography>
    </Box>
    <Link underline="none">更多熱門景點</Link>
  </Box>
);

const SceneryCard = () => (
  <Card sx={classes.card}>
    <Link underline="none" color="#000">
      <CardActionArea>
        <CardMedia component="img" height={163} alt="札幌" image={sapporo} />
        <CardContent sx={{ pt: 0.8 }}>
          <Typography variant="h5" component="h6" sx={{ fontWeight: 700 }}>
            札幌
          </Typography>
          <CardInfo location="札幌" time="每日開放" vertical />
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
);
