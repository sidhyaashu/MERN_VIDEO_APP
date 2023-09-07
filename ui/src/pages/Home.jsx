import styled from "styled-components"
import VideoCard from "../components/VideoCard"
import { useEffect, useState } from "react";
import axios from "axios"


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const fetchVideos = async()=>{
      const res =await axios.get(`http://localhost:8800/api/videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos()
  },[type])
  return (
    <Container>
      {videos.map((video)=>(<VideoCard key={video._id} video={video} />))}
    </Container>
  )
}

export default Home
