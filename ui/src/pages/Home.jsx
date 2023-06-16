import styled from "styled-components"
import VideoCard from "../components/VideoCard"



const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Home = () => {
  return (
    <Container>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
    </Container>
  )
}

export default Home
