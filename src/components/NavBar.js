import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { display } from "@mui/system";
import { Search } from "@mui/icons-material";
import { SearchBar } from "./index";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
        <Link to="/" style={{display:"flex", alignItems:"center"}}>
            <img src={logo} alt="logo" height={45}></img>
        </Link>
        <SearchBar></SearchBar>
    </Stack>
  );
};

export default NavBar;
