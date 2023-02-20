import React, { useEffect, useState } from "react";
import { Box, Stack, typography } from "@mui/system";
import {SideBar,Videos} from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Typography } from "@mui/material";

const Feed = () => {
  const [selectedCategory, setSelectesCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => //ในวิดีโอส่งออปเจกต์ของแต่ละวิดีโอไป
    setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectesCategory}
        ></SideBar>
      </Box>
      <Box p={2} sx={{overflowY:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          {selectedCategory} <span style={{color:"#fc1503"}}>Video</span>
        </Typography>
        <Videos videos={videos}/> //
      </Box>
     
    </Stack>
  );
};

export default Feed;
