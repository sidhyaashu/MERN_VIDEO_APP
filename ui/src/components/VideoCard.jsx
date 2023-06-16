import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    width: 390px;
    cursor: pointer;
    margin-bottom: 13px;
    border: 1px solid white;
    border-radius: 3px;
    overflow: hidden;
    background-color: red;
    height: 320px;
`

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top:16px ;
  gap: 12px;
  padding: 0px 7px 7px 7px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Texts = styled.div`
  
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme})=>theme.text};
`

const ChannelName = styled.h2`
  font-size: 14px;
  color:${({theme})=>theme.textSoft} ;
`

const Info = styled.div`
  font-size: 14px;
  color:${({theme})=>theme.textSoft} ;
`


const VideoCard = () => {
  return (
    <NavLink style={{textDecoration:"none"}} to="video/test" >
    <Container>
      <Image/>
      <Details>
        <ChannelImage/>
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Sidhya</ChannelName>
          <Info>65k views <small>1 day ago</small> </Info>
        </Texts>
      </Details>
    </Container>
    </NavLink>
  )
}

export default VideoCard
