import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Comments from '../components/Comments';
import VideoCard from './../components/VideoCard';


const Container = styled.div`
    display: flex;
    gap: 24px;
`
const Content = styled.div`
    flex: 5;
`
const Videowrapper = styled.div`
    
`
const Title = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.text};
`
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.span`
    color: ${({theme})=>theme.textSoft};
`
const Buttons = styled.button`
    display: flex;
    gap: 20px;
    color: ${({theme})=>theme.text};
    background-color: transparent;
    border: none;
    outline: none;
    background-color: transparent;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({theme})=>theme.text};
`
const Recomendation = styled.div`
    flex: 2;
    overflow-y: scroll;
    height: 85vh;
    scroll-behavior: smooth;
`

const Hr = styled.hr`
    border: .5px solid ${({theme})=>theme.soft};
    margin: 15px 0px;
`
const Channel = styled.div` 
    display: flex;
    justify-content: space-between;
`
const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`
const Image = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: red;
`
const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme})=> theme.text};
`
const ChannelName = styled.span`
    font-weight: 500;

`
const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme})=> theme.textSoft};
`
const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: ${({theme})=> theme.text};
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
`





const Video = () => {
  return (
    <Container>
        <Content>
            <Videowrapper>
                <iframe width="100%" height="550" src="https://www.youtube.com/embed/bVVtD9-hKuY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Videowrapper>
            <Title>Test Video</Title>
            <Details>
                <Info>986544 views - june 22,2022</Info>
                <Buttons>
                    <Button>
                        <ThumbUpIcon/> 1232
                    </Button>
                    <Button>
                        <ThumbDownIcon/> dislike
                    </Button>
                    <Button>
                        <ShareIcon/> share
                    </Button>
                    <Button>
                        <SaveAltIcon/> save
                    </Button>

                </Buttons>
            </Details>
            <Hr/>
            <Channel>
                <ChannelInfo>
                    <Image src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
                    <ChannelDetail>
                        <ChannelName>Sidhya Android</ChannelName>
                        <ChannelCounter>200k subscriber</ChannelCounter>
                        <Description>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quod ea fuga laborum est porro officia ipsa 
                        </Description>
                    </ChannelDetail>
                </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr/>
            <Comments/>
        </Content>
        <Recomendation>
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
            <VideoCard type="sm" />
        </Recomendation>
    </Container>
  )
}

export default Video
