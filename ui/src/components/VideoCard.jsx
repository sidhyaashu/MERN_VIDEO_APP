import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    width:  ${(props)=>props.type === "sm" ? "320px" : "390px"};
    cursor: pointer;
    margin-bottom: ${(props)=>props.type === "sm" ? "8px" : "13px "} ;
    border: 1px solid white;
    border-radius: 3px;
    overflow: hidden;
    border: 1px solid ${({theme})=>theme.text};
    display: ${(props)=>props.type === "sm" && "flex"};

`

const Image = styled.img`
    /* width: ${(props)=>props.type === "sm" ? "60%" : "100%"}; */
    width: 100%;
    flex: 1;
    object-fit: cover;
    height: ${(props)=>props.type === "sm" ? "120px" : "202px"};
    background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top:16px ;
  gap: 12px;
  padding: 0px 7px 7px 7px;
  flex: 1;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type === "sm" && "none"};
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


const VideoCard = ({type}) => {
  return (
    <NavLink style={{textDecoration:"none"}} to="video/test" >
    <Container type={type} >
      <Image  type={type} src='https://th.bing.com/th/id/OIP.LUG6AerNQHqaJHk0ft87OAHaEo?pid=ImgDet&rs=1' />
      <Details type={type} >
        <ChannelImage type={type} />
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
