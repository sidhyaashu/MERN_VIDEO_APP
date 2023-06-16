import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';


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
`

const Video = () => {
  return (
    <Container>
        <Content>
            <Videowrapper>
                <iframe width="100%" height="650" src="https://www.youtube.com/embed/bVVtD9-hKuY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        </Content>
        <Recomendation>Recomendation</Recomendation>
    </Container>
  )
}

export default Video
