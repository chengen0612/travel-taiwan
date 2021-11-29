import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 8,
    display: "flex",
    flexDirection: ({ vertical }) => (vertical ? "column" : "row"),
    columnGap: 2,
  },
  icon: {
    marginRight: 8,
    color: theme.palette.primary.main,
    transform: "translateY(6px)",
  },
}));

const mapTypeToIcon = (className) => ({
  location: <FmdGoodIcon className={className} />,
  time: <WatchLaterIcon className={className} />,
  phone: <PhoneInTalkIcon className={className} />,
});

export default function CardInfo(props) {
  const classes = useStyles(props);

  let informations = [];
  for (let key in props) {
    if (key !== "vertical")
      informations.push({
        type: key,
        icon: mapTypeToIcon(classes.icon)[key],
        data: props[key],
      });
  }

  // console.log(informations);

  return (
    <Box className={classes.root}>
      {informations.map((info, i) => (
        <Box key={i}>
          {info.icon}
          <Typography variant="body1" component="span">
            {info.data}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
