import React, {useState, useEffect} from 'react'
import {Typography, Box} from "@mui/material";
import {useParams} from "react-router-dom"

import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Videos} from "../components"


const SearchFeed = () => {
  const [videos, setVideos] = useState (null); //ตัวหน้าคือ state ตัวหลัง คือ ฟังก์ชัน
  const {searchTerm} = useParams();
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(
      (data) =>{
        setVideos(data.items);
      }
    );
  },[searchTerm]) //ค่าที่เปลี่ยนแปลงแล้ว
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} color="white" md={3} ml={{ sm:"100px"}}>
        Search Result for <span style={{color:"#FC1503"}}>{searchTerm}</span> videos.

      </Typography>
    <Box display="flex">
    <Box sx={{mr: {sm:"100px"}}}>{<Videos videos={videos}/>}</Box>
    </Box> 
    </Box>
  
  )
}

export default SearchFeed
