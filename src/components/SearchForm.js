import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SearchIcon from "@mui/icons-material/Search";

// prettier-ignore
const contries = [
  "基隆", "台北", "新北", "桃園", "新竹",
  "苗栗", "台中", "彰化", "雲林", "南投",
  "嘉義", "台南", "高雄", "屏東", "台東",
  "花蓮", "澎湖", "綠島", "蘭嶼", "小琉球",
  "金門", "馬祖"
];

const styles = { gap: 2.4 };

const classes = {
  menuList: {
    padding: "12px 24px",
    maxWidth: 306,
    width: "calc(100vw - 48px)",
    display: "flex",
    columnGap: "12px",
    rowGap: styles.gap,
    flexWrap: "wrap",
  },
  menuItem: {
    width: 78,
    height: 40,
    justifyContent: "center",
    border: "1px solid #3FB195",
    borderRadius: "8px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#3FB195",
    },
  },
};

export default function SearchForm() {
  return (
    <>
      <FormControl fullWidth sx={{ mt: styles.gap }}>
        <InputLabel id="select-label" htmlFor="select">
          挑選城市
        </InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label="挑選城市"
          value=""
          sx={{ ".MuiSelect-icon": { mr: 0.9, color: "#3FB195" } }}
          MenuProps={{
            autoFocus: false,
            MenuListProps: {
              sx: classes.menuList,
            },
          }}
          IconComponent={ArrowDropDownCircleIcon}
        >
          {contries.map((contry) => (
            <MenuItem key={contry} sx={classes.menuItem} value={contry}>
              {contry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mt: styles.gap }}>
        <InputLabel id="searchBar-label" htmlFor="searchBar">
          搜尋關鍵字
        </InputLabel>
        <OutlinedInput
          labelId="searchBar-label"
          id="searchBar"
          label="搜尋關鍵字"
          endAdornment={
            <InputAdornment
              position="end"
              sx={{ "&.MuiInputAdornment-root": { color: "#3FB195" } }}
            >
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
}
